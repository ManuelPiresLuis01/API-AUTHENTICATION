import { AppError } from "../../../../../shared/error/AppError";
import { UpdateUserGenderUseCase } from "./updateUserGenderUseCase";

export class UpdateUserGenderController {
    constructor(private updateUserGenderUseCase: UpdateUserGenderUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request;
        const { gender } = request.body;

        try {
            const user = await this.updateUserGenderUseCase.execute(
                id,
                gender,
            );

            return response.status(200).json({ message: "Gender updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });              
        }
    }
}