import { Request, Response } from "express";
import { FindProfileUseCase } from "./findProfileUseCase";

export class FindProfileController {
    constructor(readonly findProfileUseCase: FindProfileUseCase) {}

    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request;

        const user = await this.findProfileUseCase.execute(id);

        return response.status(200).json(user);
    }
}