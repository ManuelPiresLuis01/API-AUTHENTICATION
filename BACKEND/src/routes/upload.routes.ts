import { Router } from "express";
import multer from "multer";
import { uploadController } from "../modules/upload/useCases/upload";

const uploadRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

uploadRouter.post('/', upload.single('file'), (request, response) => {
    return uploadController.handle(request, response);
});

export { uploadRouter };