import { AppError } from "../../../../../shared/error/AppError";
import { UpdateInstNameUseCase } from "./updateInstNameUseCase";

export class UpdateInstNameController {
    constructor(private updateinstNameUseCase: UpdateInstNameUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request.params;
        const { name } = request.body;

        try {
            const user = await this.updateinstNameUseCase.execute(
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