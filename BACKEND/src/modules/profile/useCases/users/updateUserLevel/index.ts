import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";
import { UpdateUserLevelController } from "./updateUserLevelController";
import { UpdateUserLevelUseCase } from "./updateUserLevelUseCase";

const userRepository = new UserRepository();
const updateUserLevelDateUseCase = new UpdateUserLevelUseCase(userRepository);
const updateUserLevelController = new UpdateUserLevelController(updateUserLevelDateUseCase);

export { updateUserLevelController };