import { UserRepository } from "../../../user/repositories/implementations/UserRepository";
import { ActivateAccountUseCase } from "./ActivateAccountUseCase";
import { ActivateAccountController } from "./ActivateAccountController";

const userRepository = new UserRepository();
const activateAccountUseCase = new ActivateAccountUseCase(userRepository);
const activateAccountController = new ActivateAccountController(activateAccountUseCase);


export {
    activateAccountController
}