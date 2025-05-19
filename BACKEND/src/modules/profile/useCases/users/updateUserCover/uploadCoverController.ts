import { Request, Response } from "express";
import { UpdateCoverUseCase } from "./updateCoverUseCase";
import { AppError } from "../../../../../shared/error/AppError";

export class UploadCoverController {
    constructor(readonly updateCoverUseCase: UpdateCoverUseCase) {}
  
    async handle(request: Request, response: Response): Promise<any> {
      try {
        const { id } = request;
        const { url } = request.body;
    
        await this.updateCoverUseCase.execute(id, url);
    
        return response.status(200).json({ message: "Cover updated successfully" });
      } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }
    
            console.error(error);
            return response.status(500).json({ message: "Internal server error" });              
        }
    }
  }