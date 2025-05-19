import { Request, Response } from "express";
import { CreateInstitutionUseCase } from "./CreateInstitutionUseCase";

export class CreateInstitutionController {
    constructor(private createInstitutionUseCase: CreateInstitutionUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            address,
            institutionalEmail,
            name,
            representative,
            banner,
            description,
            logo,
            phone,
        } = request.body;
        const idLogged = request.id

        try {
            await this.createInstitutionUseCase.execute(idLogged, {
                address,
                institutionalEmail,
                name,
                representative,
                banner,
                description,
                logo,
                phone,
            });

            return response.status(201).json({
                status: 201,
                message: "Institution created successfully",

            });
        } catch (error) {
            return response.status(error.statusCode || 400).json({
                status: error.statusCode || 400,
                error: error.message,
            });
        }
    }
}
