import { Request, Response } from "express";
import { FindMembersUseCase } from "./findMembersUseCase";
import { AppError } from "../../../../../shared/error/AppError";

export class FindMembersController {
    constructor(private findMembersUseCase: FindMembersUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const members = await this.findMembersUseCase.execute(id);
            return response.status(200).json(members);
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });       
        }
    }
}