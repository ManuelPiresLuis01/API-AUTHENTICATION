import { AppError } from "../../../../../shared/error/AppError";
import { UpdateUserPasswordUseCase } from "./updateUserPasswordUseCase";

export class UpdateUserPasswordController {
    constructor(private updateUserPasswordUseCase: UpdateUserPasswordUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request;
        const { password } = request.body;

        try {
            const user = await this.updateUserPasswordUseCase.execute(
                id,
                password,
            );

            return response.status(200).json({ message: "Password updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });              
        }
    }
}