import { InstitutionRepository } from "../../../../institution/repositories/implemetations/InstitutionRepository";
import { UpdateInstAllFieldsController } from "./updateInstAllFieldsController";
import { UpdateInstAllFildsUseCase } from "./updateInstAllFildsUseCase";

const instRepository = new InstitutionRepository();
const updateInstUseCase = new UpdateInstAllFildsUseCase(instRepository);
const updateInstController = new UpdateInstAllFieldsController(updateInstUseCase);

export { updateInstController };