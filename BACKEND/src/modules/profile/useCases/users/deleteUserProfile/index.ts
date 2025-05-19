import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";
import { DeleteProfileController } from "./deleteProfileController";
import { DeleteProfileUseCase } from "./deleteProfileUseCase";

const userRepository = new UserRepository();
const deleteProfileUseCase = new DeleteProfileUseCase(userRepository);
const deleteProfileController = new DeleteProfileController(deleteProfileUseCase);

export { deleteProfileController };