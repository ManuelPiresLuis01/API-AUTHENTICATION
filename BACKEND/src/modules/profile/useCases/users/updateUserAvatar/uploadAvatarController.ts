import { Request, Response } from "express";
import { UpdateAvatarUseCase } from "./updateAvatarUseCase";
import { AppError } from "../../../../../shared/error/AppError";

export class UploadAvatarController {
    constructor(readonly uploadAvatarUseCase: UpdateAvatarUseCase) {}
  
    async handle(request: Request, response: Response): Promise<any> {
      try {
        const { id } = request;
        const { url } = request.body;
    
        await this.uploadAvatarUseCase.execute(id, url);
    
        return response.status(200).json({ message: "Avatar updated successfully" });
      } catch (error) {
          if (error instanceof AppError) {
              return response.status(error.statusCode).json({ message: error.message });
          }
  
          console.error(error);
          return response.status(500).json({ message: "Internal server error" });              
      }
    }
  }