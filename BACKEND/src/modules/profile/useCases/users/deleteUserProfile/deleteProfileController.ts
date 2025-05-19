import { Request, Response } from "express";
import { DeleteProfileUseCase } from "./deleteProfileUseCase";
import { AppError } from "../../../../../shared/error/AppError";

export class DeleteProfileController {
    constructor(readonly deleteProfileUseCase: DeleteProfileUseCase) {}

    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request;

        try {
            await this.deleteProfileUseCase.execute(id);

            return response.status(204).send();
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });           
        }
    }
}