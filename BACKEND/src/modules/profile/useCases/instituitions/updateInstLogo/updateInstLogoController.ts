import { AppError } from "../../../../../shared/error/AppError";
import { UpdateInstLogoUseCase } from "./updateInstLogoUseCase";

export class UpdateInstLogoController {
    constructor(private updateinstLogoUseCase: UpdateInstLogoUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request.params;
        const { logo } = request.body;

        try {
            const user = await this.updateinstLogoUseCase.execute(
                id,
                logo,
            );

            return response.status(200).json({ message: "Logo updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });
            
        }
    }
}