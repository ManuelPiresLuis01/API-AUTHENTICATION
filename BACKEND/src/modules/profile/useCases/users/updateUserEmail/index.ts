import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";
import { UpdateUserEmailController } from "./updateUserEmailController";
import { UpdateUserEmailUseCase } from "./updateUserEmailUseCase";

const userRepository = new UserRepository();
const updateUserEmailUseCase = new UpdateUserEmailUseCase(userRepository);
const updateUserEmailController = new UpdateUserEmailController(updateUserEmailUseCase);

export { updateUserEmailController };