import { AppError } from "../../../../../shared/error/AppError";
import { IInstitutionRepository } from "../../../../institution/repositories/IInstitutionRepository";

export class UpdateInstPhoneUseCase {
    constructor(private instRepository: IInstitutionRepository) {}

    async execute(instId: string, phone: string): Promise<void> {
        const inst = await this.instRepository.findById(instId);

        if (!inst) {
            throw new AppError("Instituition not found", 404);
        }

        await this.instRepository.updatePhone(instId, phone);
    }
}   