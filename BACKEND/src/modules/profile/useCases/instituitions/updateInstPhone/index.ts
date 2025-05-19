import { InstitutionRepository } from "../../../../institution/repositories/implemetations/InstitutionRepository";
import { UpdateInstPhoneController } from "./updateInstPhoneController";
import { UpdateInstPhoneUseCase } from "./updateInstPhoneUseCase";

const instRepository = new InstitutionRepository();
const updateInstPhoneUseCase = new UpdateInstPhoneUseCase(instRepository);
const updateInstPhoneController = new UpdateInstPhoneController(updateInstPhoneUseCase);

export { updateInstPhoneController };