import { AppError } from "../../../../shared/error/AppError";
import { IUserRepository } from "../../../user/repositories/IUserRepository";
import { IActivateAccountDTO } from "../../dto/IActivateAccountDTO";



export class ActivateAccountUseCase {
    constructor(private userRepository: IUserRepository) {

    }

    async execute({ email, code }: IActivateAccountDTO) {

        const userAlreadyExists = await this.userRepository.findByEmail(email);
        if (!userAlreadyExists) {
            throw new AppError("User does not exists", 404)
        }

        if (userAlreadyExists.isActive) {
            throw new AppError("The account is already activated")
        }

        if (userAlreadyExists.activationCode !== Number(code)) {
            throw new AppError("Invalid activation Code")
        }

        if (userAlreadyExists.activationCodeExpiresAt < new Date()) {
            throw new AppError("Activation code expired")
        }

        const updateData = {
            isActive: true,
            activationCode: null,
            activationCodeExpiresAt: null
        }
        await this.userRepository.activateAccountByEmail(email, updateData)
    }
}