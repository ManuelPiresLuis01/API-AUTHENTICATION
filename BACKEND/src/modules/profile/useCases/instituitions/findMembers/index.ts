import { InstitutionRepository } from "../../../../institution/repositories/implemetations/InstitutionRepository";
import { MemberInstitutionRepository } from "../../../../memberInstitution/repositories/implementations/MemberRepository";
import { FindMembersController } from "./findMembersController";
import { FindMembersUseCase } from "./findMembersUseCase";

const instRepository = new InstitutionRepository();
const memberInstRepository = new MemberInstitutionRepository();
const findMembersUseCase = new FindMembersUseCase(instRepository, memberInstRepository);
const findMembersController = new FindMembersController(findMembersUseCase);

export { findMembersController };