import { AppError } from "../../../../../shared/error/AppError";
import { UpdateInstAddressUseCase } from "./updateInstAddressUseCase";

export class UpdateInstAddressController {
    constructor(private updateinstAddressUseCase: UpdateInstAddressUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request.params;
        const { address } = request.body;

        try {
            const user = await this.updateinstAddressUseCase.execute(
                id,
                address,
            );

            return response.status(200).json({ message: "Address updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });       
        }
    }
}