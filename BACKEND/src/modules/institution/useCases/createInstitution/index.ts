import { InstitutionRepository } from "../../repositories/implemetations/InstitutionRepository";
import { CreateInstitutionUseCase } from "./CreateInstitutionUseCase";
import { CreateInstitutionController } from "./CreateInstitutionController";
import { MemberInstitutionRepository } from "../../../memberInstitution/repositories/implementations/MemberRepository";
const institutionRepository = new InstitutionRepository();
const memberInstitutionRepository = new MemberInstitutionRepository();

const createInstitutionUseCase = new CreateInstitutionUseCase(institutionRepository, memberInstitutionRepository);
const createInstitutionController = new CreateInstitutionController(createInstitutionUseCase);

export { createInstitutionController };
