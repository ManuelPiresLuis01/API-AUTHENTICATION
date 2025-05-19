import { AppError } from "../../../../shared/error/AppError";
import { IInstitutionRepository } from "../../../institution/repositories/IInstitutionRepository";
import { IUserRepository } from "../../../user/repositories/IUserRepository";
import { ICreateMemberInstitutionDTO } from "../../dto/ICreateMemberInstitutionDTO";
import { IMemberInstitutionRepository } from "../../repositories/IMemberInstitutionRepository";


export class CreateMemberInstitutionUseCase {
    constructor(private memberInstitutionRepository: IMemberInstitutionRepository, private userRepository: IUserRepository, private institutionRepository: IInstitutionRepository) {

    }

    async execute({ userId, institutionId, role }: ICreateMemberInstitutionDTO) {

        const userIdAlreadyExists = await this.userRepository.findById(userId)

        if (!userIdAlreadyExists) {
            throw new AppError("User not found", 404);
        }

        const institutionIdAlreadyExists = await this.institutionRepository.findById(institutionId)

        if (!institutionIdAlreadyExists) {
            throw new AppError("Institution not found", 404);
        }

        const memberAlreadyExists = await this.memberInstitutionRepository.findByUserIdAndInstitutionId(userId, institutionId)
        if (memberAlreadyExists) {
            throw new AppError("Member institution already exists", 409);
        }

        await this.memberInstitutionRepository.create({ institutionId, role, userId })
    }
}