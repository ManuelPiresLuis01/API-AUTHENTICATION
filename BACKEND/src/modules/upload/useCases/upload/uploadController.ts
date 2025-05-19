import { Request, Response } from "express";
import { UploadUseCase } from "./uploadUseCase";
import { AppError } from "../../../../shared/error/AppError";

export class UploadController {
    constructor(readonly uploadAvatarUseCase: UploadUseCase) {}
  
    async handle(request: Request, response: Response): Promise<any> {
      try {
        const { resourceType, folderName, formatType } = request.query;
        const { file } = request;
    
        const url = await this.uploadAvatarUseCase.execute(
          file, 
          resourceType as "image", 
          folderName as "userAvatars" | "userCovers" | "instBanners" | "instLogos", 
          formatType as "webp" | "mp4"
        );
    
        return response.status(200).json({ url: url });
      } catch (error) {
          if (error instanceof AppError) {
              return response.status(error.statusCode).json({ message: error.message });
          }
  
          console.error(error);
          return response.status(500).json({ message: "Internal server error" });              
      }
    }
  }