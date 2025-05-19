import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";
import { UpdateCoverUseCase } from "./updateCoverUseCase";
import { UploadCoverController } from "./uploadCoverController";

const userRepository = new UserRepository();
const updateCoverUseCase = new UpdateCoverUseCase(userRepository);
const updateUserCoverController = new UploadCoverController(updateCoverUseCase);

export { updateUserCoverController };