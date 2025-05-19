import express from "express";
import { CreateMemberInstitutionController } from "./CreateMemberInstitutionController";
import { CreateMemberInstitutionUseCase } from "./CreateMemberInstitutionUseCase";
import { MemberInstitutionRepository } from "../../repositories/implementations/MemberRepository";
import { UserRepository } from "../../../user/repositories/implementations/UserRepository";
import { InstitutionRepository } from "../../../institution/repositories/implemetations/InstitutionRepository";
const app = express();

const memberInstitutionRepository = new MemberInstitutionRepository();
const userRepository = new UserRepository();
const institutionRepository = new InstitutionRepository();

const createMemberInstitutionUseCase = new CreateMemberInstitutionUseCase(
    memberInstitutionRepository,
    userRepository,
    institutionRepository
);

const createMemberInstitutionController = new CreateMemberInstitutionController(
    createMemberInstitutionUseCase
);


export {
    createMemberInstitutionController
}