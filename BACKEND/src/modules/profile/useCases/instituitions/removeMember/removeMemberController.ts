import { Request, Response } from "express";
import { RemoveMemberUseCase } from "./removeMemberUseCase";
import { AppError } from "../../../../../shared/error/AppError";

export class RemoveMemberController {
    constructor(
        readonly removeMemberUseCase: RemoveMemberUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { userId, instId } = request.params;

        try {
            await this.removeMemberUseCase.execute(userId, instId);
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