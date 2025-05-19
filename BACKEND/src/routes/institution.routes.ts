import { Router } from "express";
import { createInstitutionController } from "../modules/institution/useCases/createInstitution";

const institutionRouter = Router();

institutionRouter.post("/", (request, response) => {
    createInstitutionController.handle(request, response);
})

export {
    institutionRouter
}