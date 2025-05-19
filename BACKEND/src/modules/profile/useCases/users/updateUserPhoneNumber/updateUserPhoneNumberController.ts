import { AppError } from "../../../../../shared/error/AppError";
import { UpdateUserPhoneNumberUseCase } from "./updateUserPhoneNumberUseCase";

export class UpdateUserPhoneNumberController {
    constructor(private updateUserPhoneNumberlUseCase: UpdateUserPhoneNumberUseCase) {}

    async handle(request: any, response: any): Promise<any> {
        const { id } = request;
        const { phoneNumber } = request.body;

        try {
            const user = await this.updateUserPhoneNumberlUseCase.execute(
                id,
                phoneNumber,
            );

            return response.status(200).json({ message: "Phone number updated successfully" });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });              
        }
    }
}