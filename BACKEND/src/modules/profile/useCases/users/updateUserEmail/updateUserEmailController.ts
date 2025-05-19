import { AppError } from "../../../../../shared/error/AppError";
import { UpdateUserEmailUseCase } from "./updateUserEmailUseCase";

export class UpdateUserEmailController {
    constructor(private updateUserEmailUseCase: UpdateUserEmailUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request;
        const { email } = request.body;

        try {
            const user = await this.updateUserEmailUseCase.execute(
                id,
                email,
            );

            return response.status(200).json({ message: "E-mail updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });              
        }
    }
}