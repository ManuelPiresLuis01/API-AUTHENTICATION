import { Transform } from "nodemailer/lib/xoauth2";
import cloudinary from "../../../../shared/config/cloudinary";
import { AppError } from "../../../../shared/error/AppError";

export class UploadUseCase {
    constructor() {}

    async execute(
        file: Express.Multer.File, 
        resourceType: "image", 
        folderName: "userAvatars" | "userCovers" | "instBanners" | "instLogos", 
        formatType: "webp" | "mp4"
    ) {
        if(!file) {
            throw new AppError("File not found", 404);
        }

        const transformation = (resourceType == 'image') ? [
            { width: 1200, height: 627, crop: "limit" },
            { quality: "auto", fetch_format: "auto" }
        ] : [
            { quality: "auto", fetch_format: "auto" }, 
            { width: 1080, crop: "limit" }
        ];

        const options = {
            resource_type: resourceType,
            folder: folderName,
            format: formatType,
            transformation
        };

        const fileSent = await new Promise<cloudinary.UploadApiResponse>((resolve, reject) => {
            const stream = cloudinary.v2.uploader.upload_stream(options, (error, result) => {
                if (error) return reject(error);
                return resolve(result as cloudinary.UploadApiResponse);
            });
      
            stream.end(file.buffer);
        });

        return fileSent.secure_url;
    }
}