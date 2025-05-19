import { AppError } from "../../../../../shared/error/AppError";
import { IUserRepository } from "../../../../user/repositories/IUserRepository";

export class UpdateAvatarUseCase {
    constructor(readonly userRepository: IUserRepository) {}

    async execute(id: string, url: string) {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new AppError("User not found", 404);
        }

        await this.userRepository.updateAvatar(id, url);
    }
}