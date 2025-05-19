import { Router } from "express";
import { createInstitutionController } from "../modules/institution/useCases/createInstitution";
import { createMemberInstitutionController } from "../modules/memberInstitution/useCase/CreateMemberIntitution";

const memberInstitutionRouter = Router();

memberInstitutionRouter.post("/", (request, response) => {
    createMemberInstitutionController.handle(request, response);
})

export {
    memberInstitutionRouter
}