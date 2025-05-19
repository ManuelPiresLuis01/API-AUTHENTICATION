import { AppError } from "../../../../../shared/error/AppError";
import { IInstitutionRepository } from "../../../../institution/repositories/IInstitutionRepository";

export class DeleteProfileUseCase {
    constructor(readonly instRepository: IInstitutionRepository) {}

    async execute(id: string) {
        const inst = await this.instRepository.findProfileById(id);

        if (!inst) {
            throw new AppError("Instituition not found", 404);
        }

        await this.instRepository.delete(id);
    }
}