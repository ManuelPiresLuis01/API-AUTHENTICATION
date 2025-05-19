import { AppError } from "../../../../../shared/error/AppError";
import { UpdateUserNameUseCase } from "./updateUserNameUseCase";

export class UpdateUserNameController {
    constructor(private updateUserNameUseCase: UpdateUserNameUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request;
        const { name } = request.body;

        try {
            const user = await this.updateUserNameUseCase.execute(
                id,
                name,
            );

            return response.status(200).json({ message: "Name updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });              
        }
    }
}