import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";
import { UpdateUserGenderController } from "./updateUserGenderController";
import { UpdateUserGenderUseCase } from "./updateUserGenderUseCase";

const userRepository = new UserRepository();
const updateUserGenderUseCase = new UpdateUserGenderUseCase(userRepository);
const updateUserGenderController = new UpdateUserGenderController(updateUserGenderUseCase);

export { updateUserGenderController };