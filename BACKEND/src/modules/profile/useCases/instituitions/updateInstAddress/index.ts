import { InstitutionRepository } from "../../../../institution/repositories/implemetations/InstitutionRepository";
import { UpdateInstAddressController } from "./updateInstAddressController";
import { UpdateInstAddressUseCase } from "./updateInstAddressUseCase";

const instRepository = new InstitutionRepository();
const updateInstAddressUseCase = new UpdateInstAddressUseCase(instRepository);
const updateInstAdrressController = new UpdateInstAddressController(updateInstAddressUseCase);

export { updateInstAdrressController as updateInstAddressController };