import { AppError } from "../../../../../shared/error/AppError";
import { UpdateInstBannerUseCase } from "./updateInstBannerUseCase";

export class UpdateInstBannerController {
    constructor(private updateinstBannerUseCase: UpdateInstBannerUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request.params;
        const { banner } = request.body;

        try {
            const user = await this.updateinstBannerUseCase.execute(
                id,
                banner,
            );

            return response.status(200).json({ message: "Banner updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });
            
        }
    }
}