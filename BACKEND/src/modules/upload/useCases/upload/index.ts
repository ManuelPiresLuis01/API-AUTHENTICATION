import { UploadUseCase } from "./uploadUseCase";
import { UploadController } from "./uploadController";

const uploadUseCase = new UploadUseCase();
const uploadController = new UploadController(uploadUseCase);

export { uploadController };