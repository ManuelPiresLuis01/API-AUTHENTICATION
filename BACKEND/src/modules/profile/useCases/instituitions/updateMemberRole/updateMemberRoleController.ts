import { Request, Response } from "express";
import { UpdateMemberRoleUseCase } from "./updateMemberRoleUseCase";
import { AppError } from "../../../../../shared/error/AppError";

export class UpdateMemberRoleController {
    constructor(readonly updateMemberRoleUseCase: UpdateMemberRoleUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { userId, instId } = request.params;
        const { newRole } = request.body;

        try {
            await this.updateMemberRoleUseCase.execute(userId, instId, newRole);
            return response.status(200).json({ message: "Member role updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });  
        }
    }
}