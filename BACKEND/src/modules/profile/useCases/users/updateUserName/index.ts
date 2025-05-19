import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";
import { UpdateUserNameController } from "./updateUserNameController";
import { UpdateUserNameUseCase } from "./updateUserNameUseCase";

const userRepository = new UserRepository();
const updateUserNameUseCase = new UpdateUserNameUseCase(userRepository);
const updateUserNameController = new UpdateUserNameController(updateUserNameUseCase);

export { updateUserNameController };