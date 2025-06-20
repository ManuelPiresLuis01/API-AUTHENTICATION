import { AppError } from "../../../../../shared/error/AppError";
import { IUserRepository } from "../../../../user/repositories/IUserRepository";

export class UpdateUserGenderUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(userId: string, gender: string): Promise<void> {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new AppError("User not found", 404);
        }

        await this.userRepository.updateGender(userId, gender);
    }
}   