import { Router } from "express";
import { findProfileController } from "../modules/profile/useCases/users/findUserProfile";
import multer from "multer";
import { updateUserAvatarController } from "../modules/profile/useCases/users/updateUserAvatar";
import { updateUserCoverController } from "../modules/profile/useCases/users/updateUserCover";
import { updateUserNameController } from "../modules/profile/useCases/users/updateUserName";
import { updateUserEmailController } from "../modules/profile/useCases/users/updateUserEmail";
import { updateUserPhoneNumberController } from "../modules/profile/useCases/users/updateUserPhoneNumber";
import { updateUserBirthDateController } from "../modules/profile/useCases/users/updateUserBirthDate";
import { updateUserLevelController } from "../modules/profile/useCases/users/updateUserLevel";
import { updateUserPointsController } from "../modules/profile/useCases/users/updateUserPoints";
import { updateUserGenderController } from "../modules/profile/useCases/users/updateUserGender";
import { updateUserPasswordController } from "../modules/profile/useCases/users/updateUserPassword";
import { deleteProfileController } from "../modules/profile/useCases/users/deleteUserProfile";
import { findProfilePublicController } from "../modules/profile/useCases/users/findUserProfilePublic";
import { findInstituitionProfileController } from "../modules/profile/useCases/instituitions/findInstituitionProfile";
import { updateInstNameController } from "../modules/profile/useCases/instituitions/updateInstName";
import { updateInstEmailController } from "../modules/profile/useCases/instituitions/updateInstEmail";
import { updateInstAddressController } from "../modules/profile/useCases/instituitions/updateInstAddress";
import { updateInstDescController } from "../modules/profile/useCases/instituitions/updateInstDesc ";
import { updateInstBannerController } from "../modules/profile/useCases/instituitions/updateInstBanner";
import { updateInstLogoController } from "../modules/profile/useCases/instituitions/updateInstLogo";
import { updateInstPhoneController } from "../modules/profile/useCases/instituitions/updateInstPhone";
import { updateInstController } from "../modules/profile/useCases/instituitions/updateInstAllFilds";
import { deleteInstProfileController } from "../modules/profile/useCases/instituitions/deleteInstProfile";
import { findMembersController } from "../modules/profile/useCases/instituitions/findMembers";
import { findInstituitionsController } from "../modules/profile/useCases/users/findInstituitions";
import { updateMemberRoleController } from "../modules/profile/useCases/instituitions/updateMemberRole";
import { removeMemberController } from "../modules/profile/useCases/instituitions/removeMember";

const profileRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// users - start

profileRouter.get("/me", (request, response) => {
    return findProfileController.handle(request, response);
});

profileRouter.patch('/users/avatar', upload.single('avatar'), (request, response) => {
    return updateUserAvatarController.handle(request, response);
});

profileRouter.patch('/users/cover', upload.single('cover'), (request, response) => {
    return updateUserCoverController.handle(request, response);
});

profileRouter.patch('/users/name', (request, response) => {
    return updateUserNameController.handle(request, response);
});

profileRouter.patch('/users/email', (request, response) => {
    return updateUserEmailController.handle(request, response);
});

profileRouter.patch('/users/phone-number', (request, response) => {
    return updateUserPhoneNumberController.handle(request, response);
});

profileRouter.patch('/users/birth-date', (request, response) => {
    return updateUserBirthDateController.handle(request, response);
});

profileRouter.patch('/users/level', (request, response) => {
    return updateUserLevelController.handle(request, response);
});

profileRouter.patch('/users/points', (request, response) => {
    return updateUserPointsController.handle(request, response);
});

profileRouter.patch('/users/gender', (request, response) => {
    return updateUserGenderController.handle(request, response);
});

profileRouter.patch('/users/password', (request, response) => {
    return updateUserPasswordController.handle(request, response);
});

profileRouter.delete("/me", (request, response) => {
    return deleteProfileController.handle(request, response);
});

profileRouter.get("/users/:id/public", (request, response) => {
    return findProfilePublicController.handle(request, response);
});

profileRouter.get('/users/:id/instituitions', (request, response) => {
    findInstituitionsController.handle(request, response);
});

// users - end

// institutions - start

profileRouter.get("/institutions/:id", (request, response) => {
    return findInstituitionProfileController.handle(request, response);
});

profileRouter.patch('/instituitions/:id/name', (request, response) => {
    return updateInstNameController.handle(request, response);
});

profileRouter.patch('/instituitions/:id/email', (request, response) => {
    return updateInstEmailController.handle(request, response);
});

profileRouter.patch('/instituitions/:id/address', (request, response) => {
    return updateInstAddressController.handle(request, response);
});

profileRouter.patch('/instituitions/:id/description', (request, response) => {
    return updateInstDescController.handle(request, response);
});

profileRouter.patch('/instituitions/:id/banner', (request, response) => {
    return updateInstBannerController.handle(request, response);
});

profileRouter.patch('/instituitions/:id/logo', (request, response) => {
    return updateInstLogoController.handle(request, response);
});

profileRouter.patch('/instituitions/:id/phone', (request, response) => {
    return updateInstPhoneController.handle(request, response);
});

profileRouter.put('/instituitions/:id', (request, response) => {
    return updateInstController.handle(request, response);
});

profileRouter.delete('/instituitions/:id', (request, response) => {
    return deleteInstProfileController.handle(request, response);
});

profileRouter.get('/instituitions/:id/members', (request, response) => {
    findMembersController.handle(request, response);
});

profileRouter.patch('/instituitions/members/:userId/:instId/role', (request, response) => {
    updateMemberRoleController.handle(request, response);
});

profileRouter.delete('/instituitions/members/:userId/:instId', (request, response) => {
    removeMemberController.handle(request, response);
});

// institutions - end

export { profileRouter };