import { AppError } from "../../../../shared/error/AppError";
import { MemberInstitutionRepository } from "../../../memberInstitution/repositories/implementations/MemberRepository";
import { ICreateInstitutionDTO } from "../../dto/ICreateInstitutionDTO";
import { IInstitutionRepository } from "../../repositories/IInstitutionRepository";



export class CreateInstitutionUseCase {
    constructor(private institutionRepository: IInstitutionRepository, private memberInstitutionRepository: MemberInstitutionRepository) { }

    async execute(idLogged: string, { address, institutionalEmail, name, representative, banner, description, logo, phone }: ICreateInstitutionDTO) {

        const institutionAlreadyExistsByName = await this.institutionRepository.findByName(name)

        if (institutionAlreadyExistsByName) {
            throw new AppError("Institution name already in use", 409);
        }
        const institutionAlreadyExistsByPhone = await this.institutionRepository.findByPhone(phone)
        if (institutionAlreadyExistsByPhone) {
            throw new AppError("Phone already in use", 409);
        }
        const institutionAlreadyExistsByEmail = await this.institutionRepository.findByEmail(institutionalEmail)
        if (institutionAlreadyExistsByEmail) {
            throw new AppError("Institutional email already in use", 400);
        }

        const institution = await this.institutionRepository.create({
            address,
            institutionalEmail,
            name,
            representative,
            banner,
            description,
            logo,
            phone,
        });
        await this.memberInstitutionRepository.create({ institutionId: institution._id, role: "admin", userId: idLogged })
    }
}