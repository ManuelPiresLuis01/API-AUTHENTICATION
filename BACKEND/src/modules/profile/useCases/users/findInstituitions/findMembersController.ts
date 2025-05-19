import { Request, Response } from "express";
import { FindInstituitionsUseCase } from "./findInstituitionsUseCase";
import { AppError } from "../../../../../shared/error/AppError";

export class FindInstituitionsController {
    constructor(private findInstituitionsUseCase: FindInstituitionsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const inst = await this.findInstituitionsUseCase.execute(id);
            return response.status(200).json(inst);
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });       
        }
    }
}