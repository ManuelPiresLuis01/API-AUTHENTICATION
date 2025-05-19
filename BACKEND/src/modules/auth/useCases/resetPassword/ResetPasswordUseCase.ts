import { AppError } from "../../../../shared/error/AppError";
import { UserRepository } from "../../../user/repositories/implementations/UserRepository";
import { hash } from "bcrypt";

export class ResetPasswordUseCase {

    constructor(private userRepository: UserRepository) {

    }

    async execute({ email, code, newPassword }: IResetPasswordDTO) {

        const userAlreadyExists = await this.userRepository.findByEmail(email)

        if (!userAlreadyExists) {
            throw new AppError("User does not exists", 404);
        }

        if (userAlreadyExists.resetCode != code) {
            throw new AppError("Invalid reset Code", 401)
        }

        if (userAlreadyExists.resetCodeExpiresAt < new Date()) {
            throw new AppError("Reset code expired", 401)
        }

        const passwordHash = await hash(newPassword, Number(process.env.BCRYPT_SALT_ROUNDS));

        const updateData = {
            password: passwordHash,
            resetCode: null,
            resetCodeExpiresAt: null
        }

        await this.userRepository.updateByEmail(email, updateData);
    }
}