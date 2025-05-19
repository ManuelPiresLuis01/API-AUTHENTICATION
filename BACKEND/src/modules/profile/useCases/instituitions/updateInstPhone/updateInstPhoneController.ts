import { AppError } from "../../../../../shared/error/AppError";
import { UpdateInstPhoneUseCase } from "./updateInstPhoneUseCase";

export class UpdateInstPhoneController {
    constructor(private updateinstPhoneUseCase: UpdateInstPhoneUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request.params;
        const { phone } = request.body;

        try {
            await this.updateinstPhoneUseCase.execute(
                id,
                phone,
            );

            return response.status(200).json({ message: "Phone updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });  
        }
    }
}