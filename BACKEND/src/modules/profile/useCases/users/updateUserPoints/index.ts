import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";
import { UpdateUserPointsController } from "./updateUserPointsController";
import { UpdateUserPointsUseCase } from "./updateUserPointsUseCase";

const userRepository = new UserRepository();
const updateUserPointsDateUseCase = new UpdateUserPointsUseCase(userRepository);
const updateUserPointsController = new UpdateUserPointsController(updateUserPointsDateUseCase);

export { updateUserPointsController };