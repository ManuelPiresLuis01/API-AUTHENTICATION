import { AppError } from "../../../../../shared/error/AppError";
import { IInstitutionRepository } from "../../../../institution/repositories/IInstitutionRepository";

export class UpdateInstBannerUseCase {
    constructor(private instRepository: IInstitutionRepository) {}

    async execute(instId: string, banner: string): Promise<void> {
        const inst = await this.instRepository.findById(instId);

        if (!inst) {
            throw new AppError("Instituition not found", 404);
        }

        await this.instRepository.updateBanner(instId, banner);
    }
}   