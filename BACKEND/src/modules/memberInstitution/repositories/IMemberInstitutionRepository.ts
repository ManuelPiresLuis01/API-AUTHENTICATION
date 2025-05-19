import { ICreateMemberInstitutionDTO } from "../dto/ICreateMemberInstitutionDTO";

export interface IMemberInstitutionRepository {
    create({ institutionId, userId, role }: ICreateMemberInstitutionDTO): Promise<void>;
    findByUserIdAndInstitutionId(userId: string, institutionId: string): Promise<any>;
    findInstitutionsByUserId(userId: string): Promise<any[]>;
    findMembersByInstitutionId(institutionId: string): Promise<any[]>;
    updateMemberRole(userId: string, institutionId: string, newRole: string): Promise<void>;
    delete(userId: string, institutionId: string): Promise<void>;
}