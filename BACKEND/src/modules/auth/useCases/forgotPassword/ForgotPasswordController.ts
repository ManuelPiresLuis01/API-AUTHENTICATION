import { Request, Response } from "express";
import { ForgotPasswordUseCase } from "./ForgotPasswordUseCase";



export class ForgotPasswordController {
    constructor(private forgotPasswordUseCase: ForgotPasswordUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { email } = request.body;

        try {
            await this.forgotPasswordUseCase.execute(email)
            return response.status(200).json({
                status: 200,
                message: "Account recovery code sent to your email."
            });
        } catch (error) {
            return response.status(error.statusCode || 400).json({
                status: error.statusCode || 400,
                error: error.message
            })
        }
    }
}