import { UserRepository } from "../../../user/repositories/implementations/UserRepository";
import { SignInUseCase } from "./SignInUseCase";
import { SignInController } from "./SignInController";

const userRepository = new UserRepository();
const signInUseCase = new SignInUseCase(userRepository);
const signInController = new SignInController(signInUseCase);

export {
    signInController
}