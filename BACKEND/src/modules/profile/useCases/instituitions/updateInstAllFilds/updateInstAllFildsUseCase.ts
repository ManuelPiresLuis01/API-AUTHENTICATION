import { AppError } from "../../../../../shared/error/AppError";
import { IInstitutionRepository } from "../../../../institution/repositories/IInstitutionRepository";
import { UpdateInstAllFieldsDTO } from "../../../dto/updateInstAllFieldsDTO";

export class UpdateInstAllFildsUseCase {
    constructor(private instRepository: IInstitutionRepository) {}

    async execute(data: UpdateInstAllFieldsDTO): Promise<void> {
        const inst = await this.instRepository.findById(data.instId);

        if (!inst) {
            throw new AppError("Instituition not found", 404);
        }
        
        await this.instRepository.updateAllFields(data);
    }
}   