import { UserRepository } from "../../../user/repositories/implementations/UserRepository";
import { ResendActivationCodeUseCase } from "./ResendActivationCodeUseCase";
import { ResendActivationCodeController } from "./ResendActivationCodeController";

const userRepository = new UserRepository();
const resendActivationCodeUseCase = new ResendActivationCodeUseCase(userRepository);
const resendActivationCodeController = new ResendActivationCodeController(resendActivationCodeUseCase);

export {
    resendActivationCodeController
}

