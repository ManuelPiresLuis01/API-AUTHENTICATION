import { MemberInstitutionRepository } from "../../../../memberInstitution/repositories/implementations/MemberRepository";
import { UpdateMemberRoleController } from "./updateMemberRoleController";
import { UpdateMemberRoleUseCase } from "./updateMemberRoleUseCase";

const memberInstitutionRepository = new MemberInstitutionRepository();
const updateMemberRoleUseCase = new UpdateMemberRoleUseCase(memberInstitutionRepository);
const updateMemberRoleController = new UpdateMemberRoleController(updateMemberRoleUseCase);

export { updateMemberRoleController };
