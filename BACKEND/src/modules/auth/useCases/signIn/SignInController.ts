import { Request, Response } from "express";
import { SignInUseCase } from "./SignInUseCase";


export class SignInController {

    constructor(private singInUseCase: SignInUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {

        const { identifier, password } = request.body;

        try {

            const token = await this.singInUseCase.execute({ identifier, password })

            return response.status(200).json({
                status: 200,
                token
            })
        } catch (error) {
            return response.status(error.statusCode || 400).json({
                status: error.statusCode || 400,
                error: error.message
            })
        }
    }
}