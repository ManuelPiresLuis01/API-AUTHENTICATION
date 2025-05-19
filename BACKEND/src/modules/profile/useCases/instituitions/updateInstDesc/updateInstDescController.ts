import { AppError } from "../../../../../shared/error/AppError";
import { UpdateInstDescUseCase } from "./updateInstDescUseCase";

export class UpdateInstDescController {
    constructor(private updateinstDescUseCase: UpdateInstDescUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request.params;
        const { description } = request.body;

        try {
            const user = await this.updateinstDescUseCase.execute(
                id,
                description,
            );

            return response.status(200).json({ message: "Description updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });
            
        }
    }
}