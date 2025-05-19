export interface ICreateMemberInstitutionDTO {
    userId: string;
    institutionId: string;
    role: "admin" | "member" | "viewer";
}
