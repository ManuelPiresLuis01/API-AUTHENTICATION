import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";
import { UpdateAvatarUseCase } from "./updateAvatarUseCase";
import { UploadAvatarController } from "./uploadAvatarController";

const userRepository = new UserRepository();
const updateAvatarUseCase = new UpdateAvatarUseCase(userRepository);
const updateUserAvatarController = new UploadAvatarController(updateAvatarUseCase);

export { updateUserAvatarController };