import { InstitutionRepository } from "../../../../institution/repositories/implemetations/InstitutionRepository";
import { UpdateInstEmailController } from "./updateInstEmailController";
import { UpdateInstEmailUseCase } from "./updateInstEmailUseCase";

const instRepository = new InstitutionRepository();
const updateInstEmailUseCase = new UpdateInstEmailUseCase(instRepository);
const updateInstEmailController = new UpdateInstEmailController(updateInstEmailUseCase);

export { updateInstEmailController };