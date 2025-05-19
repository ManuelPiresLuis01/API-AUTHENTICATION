import { AppError } from "../../../../../shared/error/AppError";
import { UpdateUserBirthDateUseCase } from "./updateUserBirthDateUseCase";

export class UpdateUserBirthDateController {
    constructor(private updateUserBirthDateUseCase: UpdateUserBirthDateUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request;
        const { birthDate } = request.body;

        const date = new Date(birthDate);

        try {
            const user = await this.updateUserBirthDateUseCase.execute(
                id,
                date,
            );

            return response.status(200).json({ message: "Bith date updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });              
        }
    }
}