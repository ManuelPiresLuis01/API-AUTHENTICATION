import { UserRepository } from "../../../user/repositories/implementations/UserRepository";
import { ResetPasswordUseCase } from "./ResetPasswordUseCase";
import { ResetPasswordController } from "./ResetPasswordController";

const userRepository = new UserRepository();
const resetPasswordUseCase = new ResetPasswordUseCase(userRepository);
const resetPasswordController = new ResetPasswordController(resetPasswordUseCase);


export {
    resetPasswordController
}