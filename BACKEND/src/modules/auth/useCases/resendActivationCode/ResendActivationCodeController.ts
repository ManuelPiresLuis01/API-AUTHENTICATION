import { Request, Response } from "express";
import { ResendActivationCodeUseCase } from "./ResendActivationCodeUseCase";



export class ResendActivationCodeController {
    constructor(private resendActivationCodeUseCase: ResendActivationCodeUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { email } = request.body;
        try {
            await this.resendActivationCodeUseCase.execute(email)
            return response.status(200).json({
                status: 200,
                message: "New activation code sent to your email."
            });

        } catch (error) {
            return response.status(error.statusCode || 400).json({
                status: error.statusCode || 400,
                error: error.message
            })
        }
    }
}