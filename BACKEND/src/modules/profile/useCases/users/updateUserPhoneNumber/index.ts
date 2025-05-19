import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";
import { UpdateUserPhoneNumberController } from "./updateUserPhoneNumberController";
import { UpdateUserPhoneNumberUseCase } from "./updateUserPhoneNumberUseCase";

const userRepository = new UserRepository();
const updateUserPhoneNumberUseCase = new UpdateUserPhoneNumberUseCase(userRepository);
const updateUserPhoneNumberController = new UpdateUserPhoneNumberController(updateUserPhoneNumberUseCase);

export { updateUserPhoneNumberController };