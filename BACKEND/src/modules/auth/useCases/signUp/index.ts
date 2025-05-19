import { UserRepository } from "../../../user/repositories/implementations/UserRepository";
import { SignUpUseCase } from "./SignUpUseCase";
import { SignUpController } from "./SignUpController";

const userRepository = new UserRepository();
const signUpUseCase = new SignUpUseCase(userRepository);
const signUpController = new SignUpController(signUpUseCase);

export {
    signUpController
}