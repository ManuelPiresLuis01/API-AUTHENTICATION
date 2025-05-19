import { Request, Response } from "express";
import { UpdateUserPointsUseCase } from "./updateUserPointsUseCase";
import { AppError } from "../../../../../shared/error/AppError";

export class UpdateUserPointsController {
    constructor(private updateUserPointsUseCase: UpdateUserPointsUseCase) {}

    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request;
        const { points } = request.body;

        try {
            const user = await this.updateUserPointsUseCase.execute(
                id,
                points,
            );

            return response.status(200).json({ message: "Points updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });              
        }
    }
}