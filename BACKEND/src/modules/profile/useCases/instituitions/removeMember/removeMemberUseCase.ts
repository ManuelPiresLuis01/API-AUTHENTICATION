import { AppError } from "../../../../../shared/error/AppError";
import { IMemberInstitutionRepository } from "../../../../memberInstitution/repositories/IMemberInstitutionRepository";

export class RemoveMemberUseCase {
    constructor(
        readonly memberInstitutionRepository: IMemberInstitutionRepository
    ) {}

    async execute(userId: string, institutionId: string): Promise<void> {
        const member = await this.memberInstitutionRepository.findByUserIdAndInstitutionId(userId, institutionId);

        if (!member) {
            throw new AppError("Member not found", 404);
        }

        await this.memberInstitutionRepository.delete(userId, institutionId);
    }
}