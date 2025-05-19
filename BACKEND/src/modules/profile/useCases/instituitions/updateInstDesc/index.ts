import { InstitutionRepository } from "../../../../institution/repositories/implemetations/InstitutionRepository";
import { UpdateInstDescController } from "./updateInstDescController";
import { UpdateInstDescUseCase } from "./updateInstDescUseCase";

const instRepository = new InstitutionRepository();
const updateInstDescUseCase = new UpdateInstDescUseCase(instRepository);
const updateInstDescController = new UpdateInstDescController(updateInstDescUseCase);

export { updateInstDescController };