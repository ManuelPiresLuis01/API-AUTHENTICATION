import { AppError } from "../../../../../shared/error/AppError";
import { UpdateInstAllFildsUseCase } from "./updateInstAllFildsUseCase";

export class UpdateInstAllFieldsController {
    constructor(private updateinstUseCase: UpdateInstAllFildsUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request.params;
        const {
            name,
            institutionalEmail,
            address,
            description,
            representative,
            banner,
            logo,
            phone
        } = request.body;

        const updateData = {
            instId: id,
            name,
            institutionalEmail,
            address,
            description,
            representative,
            banner,
            logo,
            phone
        };

        try {
            await this.updateinstUseCase.execute(updateData);

            return response.status(200).json({ message: "Instituition updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });
            
        }
    }
}