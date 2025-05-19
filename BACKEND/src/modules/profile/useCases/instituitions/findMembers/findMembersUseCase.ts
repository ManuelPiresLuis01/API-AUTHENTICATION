import { AppError } from "../../../../../shared/error/AppError";
import { IInstitutionRepository } from "../../../../institution/repositories/IInstitutionRepository";
import { IMemberInstitutionRepository } from "../../../../memberInstitution/repositories/IMemberInstitutionRepository";

export class FindMembersUseCase {
    constructor(
        readonly instRepository: IInstitutionRepository,
        readonly memberInstitutionRepository: IMemberInstitutionRepository
    ) {}

    async execute(institutionId: string): Promise<any[]> {
        const inst = await this.instRepository.findById(institutionId);

        if (!inst) {
            throw new AppError("Institution not found", 404);
        }

        const members = await this.memberInstitutionRepository.findMembersByInstitutionId(institutionId);
        
        return members;
    }
}