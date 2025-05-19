import { AppError } from "../../../../../shared/error/AppError";
import { IUserRepository } from "../../../../user/repositories/IUserRepository";

export class DeleteProfileUseCase {
    constructor(readonly userRepository: IUserRepository) {}

    async execute(id: string) {
        const user = await this.userRepository.findProfileById(id);

        if (!user) {
            throw new AppError("User not found", 404);
        }

        await this.userRepository.delete(id);
    }
}