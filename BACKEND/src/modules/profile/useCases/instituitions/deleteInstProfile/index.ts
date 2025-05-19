import { InstitutionRepository } from "../../../../institution/repositories/implemetations/InstitutionRepository";
import { DeleteProfileController } from "./deleteProfileController";
import { DeleteProfileUseCase } from "./deleteProfileUseCase";

const instRepository = new InstitutionRepository();
const deleteProfileUseCase = new DeleteProfileUseCase(instRepository);
const deleteInstProfileController = new DeleteProfileController(deleteProfileUseCase);

export { deleteInstProfileController };