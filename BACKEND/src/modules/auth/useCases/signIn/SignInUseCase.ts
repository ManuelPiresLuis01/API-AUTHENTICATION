import { compare } from "bcrypt";
import { AppError } from "../../../../shared/error/AppError";
import { IUserRepository } from "../../../user/repositories/IUserRepository";
import { ISignInDTO } from "../../dto/ISignInDTO";
import { sign } from "jsonwebtoken"

export class SignInUseCase {
    constructor(private userRepository: IUserRepository) {

    }

    async execute({ identifier, password }: ISignInDTO) {

        const userAlreadyExists = await this.userRepository.findByEmailOrPassword(identifier)

        if (!userAlreadyExists) {
            throw new AppError("User does not exists", 404);
        }

        const passwordMatch = await compare(password, userAlreadyExists.password)

        if (!passwordMatch) {
            throw new AppError("Email/Phone or password incorrect!", 401);
        }

        if (!userAlreadyExists.isActive) {
            throw new AppError("Account not activated. Please check your email to activate your account.", 401)
        }

        const payload = {
            id: userAlreadyExists._id
        }

        const token = sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: "5h"
        })

        return token;
    }
}