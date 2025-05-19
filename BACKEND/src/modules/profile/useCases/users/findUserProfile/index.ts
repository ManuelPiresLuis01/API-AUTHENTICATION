import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";
import { FindProfileController } from "./findProfileController";
import { FindProfileUseCase } from "./findProfileUseCase";

const userRepository = new UserRepository();
const findProfileUseCase = new FindProfileUseCase(userRepository);
const findProfileController = new FindProfileController(findProfileUseCase);

export { findProfileController };