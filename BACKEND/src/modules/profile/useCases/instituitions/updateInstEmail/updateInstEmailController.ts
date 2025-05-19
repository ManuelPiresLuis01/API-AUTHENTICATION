import { AppError } from "../../../../../shared/error/AppError";
import { UpdateInstEmailUseCase } from "./updateInstEmailUseCase";

export class UpdateInstEmailController {
    constructor(private updateinstEmailUseCase: UpdateInstEmailUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request.params;
        const { email } = request.body;

        try {
            const user = await this.updateinstEmailUseCase.execute(
                id,
                email,
            );

            return response.status(200).json({ message: "Instituitional E-mail updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });
            
        }
    }
}