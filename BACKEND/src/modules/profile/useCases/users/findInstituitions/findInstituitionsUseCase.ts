import { AppError } from "../../../../../shared/error/AppError";
import { IMemberInstitutionRepository } from "../../../../memberInstitution/repositories/IMemberInstitutionRepository";
import { IUserRepository } from "../../../../user/repositories/IUserRepository";

export class FindInstituitionsUseCase {
    constructor(
        readonly userRepository: IUserRepository,
        readonly memberInstitutionRepository: IMemberInstitutionRepository
    ) {}

    async execute(userId: string): Promise<any[]> {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new AppError("User not found", 404);
        }

        const inst = await this.memberInstitutionRepository.findInstitutionsByUserId(userId);
        
        return inst;
    }
}