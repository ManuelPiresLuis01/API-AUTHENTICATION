import { AppError } from "../../../../../shared/error/AppError";
import { IMemberInstitutionRepository } from "../../../../memberInstitution/repositories/IMemberInstitutionRepository";

export class UpdateMemberRoleUseCase {
    constructor(readonly memberInstitutionRepository: IMemberInstitutionRepository) {}

    async execute(userId: string, institutionId: string, newRole: string): Promise<void> {
        const member = await this.memberInstitutionRepository.findByUserIdAndInstitutionId(userId, institutionId);

        if (!member) {
            throw new AppError("Member not found", 404);
        }

        if (member.role === newRole) {
            throw new AppError("Member already has this role", 400);
        }

        await this.memberInstitutionRepository.updateMemberRole(userId, institutionId, newRole);
    }
}