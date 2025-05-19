import { Request, Response } from "express";
import { SignUpUseCase } from "./SignUpUseCase";


export class SignUpController {
    constructor(private signUpUseCase: SignUpUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, password, birthDate, gender, phoneNumber } = request.body;

        try {

            await this.signUpUseCase.execute({ name, email, password, birthDate, phoneNumber, gender });

            return response.status(201).send();

        } catch (error) {

            return response.status(error.statusCode || 400).json({
                status: error.statusCode || 400,
                error: error.message
            });
        }

    }
}