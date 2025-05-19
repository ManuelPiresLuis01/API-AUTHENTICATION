import { AppError } from "../../../../../shared/error/AppError";
import { IInstitutionRepository } from "../../../../institution/repositories/IInstitutionRepository";

export class UpdateInstLogoUseCase {
    constructor(private instRepository: IInstitutionRepository) {}

    async execute(instId: string, logo: string): Promise<void> {
        const inst = await this.instRepository.findById(instId);

        if (!inst) {
            throw new AppError("Instituition not found", 404);
        }

        await this.instRepository.updateLogo(instId, logo);
    }
}   