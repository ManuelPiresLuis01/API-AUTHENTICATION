import { InstitutionRepository } from "../../../../institution/repositories/implemetations/InstitutionRepository";
import { UpdateInstLogoController } from "./updateInstLogoController";
import { UpdateInstLogoUseCase } from "./updateInstLogoUseCase";

const instRepository = new InstitutionRepository();
const updateInstLogoUseCase = new UpdateInstLogoUseCase(instRepository);
const updateInstLogoController = new UpdateInstLogoController(updateInstLogoUseCase);

export { updateInstLogoController };