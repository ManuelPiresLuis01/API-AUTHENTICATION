import { Router } from "express";
import { signUpController } from "../modules/auth/useCases/signUp";
import { activateAccountController } from "../modules/auth/useCases/activateAccount";
import { resendActivationCodeController } from "../modules/auth/useCases/resendActivationCode";
import { signInController } from "../modules/auth/useCases/signIn";
import { forgotPasswordController } from "../modules/auth/useCases/forgotPassword";
import { resetPasswordController } from "../modules/auth/useCases/resetPassword";
const authRouter = Router();

authRouter.post("/sign-up", (request, response) => {
    signUpController.handle(request, response);
})

authRouter.post("/activate-account", (request, response) => {
    activateAccountController.handle(request, response);
})

authRouter.post("/resend-activation-code", (request, response) => {
    resendActivationCodeController.handle(request, response);
})

authRouter.post("/sign-in", (request, response) => {
    signInController.handle(request, response);
})

authRouter.post("/forgot-password", (request, response) => {
    forgotPasswordController.handle(request, response);
})

authRouter.post("/reset-password", (request, response) => {
    resetPasswordController.handle(request, response);
})

export {
    authRouter
}