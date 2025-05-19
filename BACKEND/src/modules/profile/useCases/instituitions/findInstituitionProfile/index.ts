import { InstitutionRepository } from "../../../../institution/repositories/implemetations/InstitutionRepository";
import { FindProfileController } from "./findProfileController";
import { FindProfileUseCase } from "./findProfileUseCase";

const instituitionRepository = new InstitutionRepository();
const findProfileUseCase = new FindProfileUseCase(instituitionRepository);
const findInstituitionProfileController = new FindProfileController(findProfileUseCase);

export { findInstituitionProfileController };