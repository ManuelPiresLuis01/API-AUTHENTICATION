import { AppError } from "../../../../../shared/error/AppError";
import { IInstitutionRepository } from "../../../../institution/repositories/IInstitutionRepository";
import { IUserRepository } from "../../../../user/repositories/IUserRepository";

export class FindProfileUseCase {
    constructor(readonly instituitionRepository: IInstitutionRepository) {}

    async execute(id: string) {
        const instituition = await this.instituitionRepository.findProfileById(id);

        if (!instituition) {
            throw new AppError("Instituition not found", 404);
        }

        return instituition;
    }
}