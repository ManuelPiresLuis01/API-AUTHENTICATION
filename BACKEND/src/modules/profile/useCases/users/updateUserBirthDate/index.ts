import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";
import { UpdateUserBirthDateController } from "./updateUserBirthDateController";
import { UpdateUserBirthDateUseCase } from "./updateUserBirthDateUseCase";

const userRepository = new UserRepository();
const updateUserBirthDateUseCase = new UpdateUserBirthDateUseCase(userRepository);
const updateUserBirthDateController = new UpdateUserBirthDateController(updateUserBirthDateUseCase);

export { updateUserBirthDateController };