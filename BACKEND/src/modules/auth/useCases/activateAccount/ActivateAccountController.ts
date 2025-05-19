import { Request, Response } from "express";
import { ActivateAccountUseCase } from "./ActivateAccountUseCase";


export class ActivateAccountController {
    constructor(private activateAccountUseCase: ActivateAccountUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { email, code } = request.body;
        try {
            await this.activateAccountUseCase.execute({ email, code })

            return response.status(200).json({
                status: 200,
                message: "Account activated sucessfully"
            })

        } catch (error) {

            return response.status(error.statusCode || 400).json({
                status: error.statusCode || 400,
                error: error.message
            })
        }

    }
}