import { Request, Response } from "express";
import { CreateMemberInstitutionUseCase } from "./CreateMemberInstitutionUseCase";

class CreateMemberInstitutionController {

    constructor(private createMemberInstitutionUseCase: CreateMemberInstitutionUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { userId, institutionId, role } = request.body;

        try {
            await this.createMemberInstitutionUseCase.execute({ userId, institutionId, role });
            return response.status(201).json({
                status: 201,
                message: "Member added successfully to the institution."
            });
        } catch (error) {
            return response.status(error.statusCode || 400).json({ message: error.message });
        }
    }
}

export { CreateMemberInstitutionController };
