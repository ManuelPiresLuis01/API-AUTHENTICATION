import { Request, Response } from "express";
import { ResetPasswordUseCase } from "./ResetPasswordUseCase";



export class ResetPasswordController {
    constructor(private resetPasswordUseCase: ResetPasswordUseCase) {

    }


    async handle(request: Request, response: Response): Promise<Response> {

        const {
            email,
            code,
            newPassword
        } = request.body;

        try {
            await this.resetPasswordUseCase.execute({
                email,
                code,
                newPassword
            })
            return response.status(200).json({
                status: 200,
                message: "Password reset successfully"
            })

        } catch (error) {
            return response.status(error.statusCode || 400).json({
                status: error.statusCode || 400,
                error: error.message
            })
        }
    }
}