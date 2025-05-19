import { Router } from "express";
import { authRouter } from "./auth.routes";
import { institutionRouter } from "./institution.routes";
import { memberInstitutionRouter } from "./memberInstitution.routes";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";
import { profileRouter } from "./profile.routes";
import { uploadRouter } from "./upload.routes";

const routes = Router();

routes.get("/", (request, response) => {
    response.status(200).json({
        message: "Hello People",
        status: 200
    });
});

routes.use("/auth", authRouter);
routes.use("/institution", ensureAuthenticated, institutionRouter);
routes.use("/member-institution", ensureAuthenticated, memberInstitutionRouter);
routes.use('/profile', ensureAuthenticated, profileRouter);
routes.use('/upload', ensureAuthenticated, uploadRouter);

export {
    routes
}