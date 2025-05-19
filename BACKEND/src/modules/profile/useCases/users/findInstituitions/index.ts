import { MemberInstitutionRepository } from "../../../../memberInstitution/repositories/implementations/MemberRepository";
import { FindInstituitionsController } from "./findMembersController";
import { FindInstituitionsUseCase } from "./findInstituitionsUseCase";
import { UserRepository } from "../../../../user/repositories/implementations/UserRepository";

const userRepository = new UserRepository();
const memberInstRepository = new MemberInstitutionRepository();
const findInstituitionsUseCase = new FindInstituitionsUseCase(userRepository, memberInstRepository);
const findInstituitionsController = new FindInstituitionsController(findInstituitionsUseCase);

export { findInstituitionsController };