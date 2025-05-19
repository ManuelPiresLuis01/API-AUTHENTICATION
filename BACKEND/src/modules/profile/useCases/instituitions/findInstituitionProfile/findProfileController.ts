import { Request, Response } from "express";
import { FindProfileUseCase } from "./findProfileUseCase";
import { AppError } from "../../../../../shared/error/AppError";

export class FindProfileController {
    constructor(readonly findProfileUseCase: FindProfileUseCase) {}

    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request.params;

        try {
            const instituition = await this.findProfileUseCase.execute(id);

            return response.status(200).json(instituition);
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });
        }
    }
}