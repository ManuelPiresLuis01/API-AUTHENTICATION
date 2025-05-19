import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";
import { UpdateUserPasswordController } from "./updateUserPasswordController";
import { UpdateUserPasswordUseCase } from "./updateUserPasswordUseCase";

const userRepository = new UserRepository();
const updateUserPasswordUseCase = new UpdateUserPasswordUseCase(userRepository);
const updateUserPasswordController = new UpdateUserPasswordController(updateUserPasswordUseCase);

export { updateUserPasswordController };