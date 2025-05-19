import { MemberInstitutionRepository } from "../../../../memberInstitution/repositories/implementations/MemberRepository";
import { RemoveMemberController } from "./removeMemberController";
import { RemoveMemberUseCase } from "./removeMemberUseCase";

const memberInstitutionRepository = new MemberInstitutionRepository();
const removeMemberUseCase = new RemoveMemberUseCase(memberInstitutionRepository);
const removeMemberController = new RemoveMemberController(removeMemberUseCase);

export { removeMemberController };
