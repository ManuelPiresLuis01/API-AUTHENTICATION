import { hash } from "bcrypt";
import { AppError } from "../../../../../shared/error/AppError";
import { IUserRepository } from "../../../../user/repositories/IUserRepository";

export class UpdateUserPasswordUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(userId: string, password: string): Promise<void> {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new AppError("User not found", 404);
        }

        const passwordHash = await hash(password, Number(process.env.BCRYPT_SALT_ROUNDS));

        await this.userRepository.updatePassword(userId, passwordHash);
    }
}   