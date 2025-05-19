import { UserRepository } from "../../../user/repositories/implementations/UserRepository";
import { ForgotPasswordUseCase } from "./ForgotPasswordUseCase";
import { ForgotPasswordController } from "./ForgotPasswordController";

const userRepository = new UserRepository();
const forgotPasswordUseCase = new ForgotPasswordUseCase(userRepository);
const forgotPasswordController = new ForgotPasswordController(forgotPasswordUseCase);


export {
    forgotPasswordController
}