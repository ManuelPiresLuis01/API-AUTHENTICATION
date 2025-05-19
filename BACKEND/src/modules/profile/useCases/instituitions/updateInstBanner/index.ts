import { InstitutionRepository } from "../../../../institution/repositories/implemetations/InstitutionRepository";
import { UpdateInstBannerController } from "./updateInstBannerController";
import { UpdateInstBannerUseCase } from "./updateInstBannerUseCase";

const instRepository = new InstitutionRepository();
const updateInstBannerUseCase = new UpdateInstBannerUseCase(instRepository);
const updateInstBannerController = new UpdateInstBannerController(updateInstBannerUseCase);

export { updateInstBannerController };