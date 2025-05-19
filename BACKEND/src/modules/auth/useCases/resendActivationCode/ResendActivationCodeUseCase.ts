import { mailTransport } from "../../../../shared/config/nodemailer";
import { AppError } from "../../../../shared/error/AppError";
import { returnEmailTempleteActivation } from "../../../../shared/utils/returnEmailTemplete";
import { IUserRepository } from "../../../user/repositories/IUserRepository";
import { randomInt } from "crypto"

export class ResendActivationCodeUseCase {
    constructor(private userRepository: IUserRepository) {

    }
    resendCodeAtivation(name: string, email: string, activationCode: number, gender: string) {

        let h2 = "";
        switch (gender) {

            case "masculine":
                h2 = "Bem-vindo, outra vez à BSmart! 🎉";
                break;
            case "feminine":
                h2 = "Bem-vinda, outra vez à BSmart! 🎉"
                break;
            default:
                h2 = "Bem-vindo(a), outra vez à BSmart! 🎉"
                break;
        }

        const title = "Ativação da Conta"
        const description = "Obrigado por se cadastrar! Para activar a sua conta, utilize o código de activação abaixo:"

        const html = returnEmailTempleteActivation(title, h2, name, activationCode, description)

        mailTransport.sendMail({
            from: `BSmart <${process.env.MAIL_USER}>`,
            to: email,
            subject: "Resend Code Activation Account",
            html
        })
    }
    async execute(email: string): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email)

        if (!userAlreadyExists) {
            throw new AppError("User does not exists", 404)
        }
        if (userAlreadyExists.isActive) {
            throw new AppError("The account is already activated")
        }
        const activationCode = randomInt(100000, 999999);
        const activationCodeExpiresAt = new Date();
        activationCodeExpiresAt.setMinutes(activationCodeExpiresAt.getMinutes() + 5);

        const updateData = {
            activationCode,
            activationCodeExpiresAt
        }

        await this.userRepository.updateByEmail(email, updateData);

        this.resendCodeAtivation(userAlreadyExists.name, email, activationCode, userAlreadyExists.gender)



    }
}