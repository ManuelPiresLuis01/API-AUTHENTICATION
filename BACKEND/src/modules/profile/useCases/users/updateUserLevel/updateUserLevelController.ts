import { AppError } from "../../../../../shared/error/AppError";
import { UpdateUserLevelUseCase } from "./updateUserLevelUseCase";

export class UpdateUserLevelController {
    constructor(private updateUserLevelUseCase: UpdateUserLevelUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request;
        const { level } = request.body;

        try {
            const user = await this.updateUserLevelUseCase.execute(
                id,
                level,
            );

            return response.status(200).json({ message: "Level updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });              
        }
    }
}