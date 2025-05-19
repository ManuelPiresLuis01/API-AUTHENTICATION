import { InstitutionRepository } from "../../../../institution/repositories/implemetations/InstitutionRepository";
import { UpdateInstNameController } from "./updateInstNameController";
import { UpdateInstNameUseCase } from "./updateInstNameUseCase";

const instRepository = new InstitutionRepository();
const updateInstNameUseCase = new UpdateInstNameUseCase(instRepository);
const updateInstNameController = new UpdateInstNameController(updateInstNameUseCase);

export { updateInstNameController };