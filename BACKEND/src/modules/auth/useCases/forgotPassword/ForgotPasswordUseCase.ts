import { IUserRepository } from "../../../user/repositories/IUserRepository";
import { AppError } from "../../../../shared/error/AppError";
import crypto from "crypto";
import { mailTransport } from "../../../../shared/config/nodemailer";
import { returnEmailTempleteReset } from "../../../../shared/utils/returnEmailTemplete";

export class ForgotPasswordUseCase {
    constructor(private userRepository: IUserRepository) { }
    sendCodeByEmail(name: string, code: string | number, email: string) {

        const html = returnEmailTempleteReset(name, String(code))

        mailTransport.sendMail({
            from: `BSmart <${process.env.MAIL_USER}>`,
            to: email,
            subject: "Forgot Password",
            html
        })
    }
    async execute(email: string) {

        const userAlreadyExists = await this.userRepository.findByEmail(email);
        if (!userAlreadyExists) {
            throw new AppError("User not found", 404);
        }

        const resetCode = crypto.randomInt(100000, 999999)

        const resetCodeExpiresAt = new Date();

        resetCodeExpiresAt.setMinutes(resetCodeExpiresAt.getMinutes() + 5);

        const updateData = {
            resetCode,
            resetCodeExpiresAt
        }

        await this.userRepository.updateByEmail(email, updateData)

        this.sendCodeByEmail(userAlreadyExists.name, resetCode, email)
    }
}
