import { UpdateInstAllFieldsDTO } from "../../profile/dto/updateInstAllFieldsDTO";
import { ICreateInstitutionDTO } from "../dto/ICreateInstitutionDTO";

export interface IInstitutionRepository {
    create(data: ICreateInstitutionDTO): Promise<any>
    findByEmail(email: string): Promise<any>
    findByName(name: string): Promise<any>
    findByPhone(phone: string): Promise<any>
    findById(id: string): Promise<any>
    findProfileById(id: string): Promise<any>;
    updateName(id: string, name: string): Promise<void>;
    updateAddress(id: string, address: string): Promise<void>;
    updateInstitutionalEmail(id: string, institutionalEmail: string): Promise<void>;
    updateRepresentative(id: string, representative: string): Promise<void>;
    updateBanner(id: string, banner: string): Promise<void>;
    updateDescription(id: string, description: string): Promise<void>;
    updateLogo(id: string, logo: string): Promise<void>;
    updatePhone(id: string, phone: string): Promise<void>;
    delete(id: string): Promise<void>;
    updateAllFields({
        instId,
        name,
        institutionalEmail,
        address,
        description,
        representative,
        banner,
        logo,
        phone
    }: UpdateInstAllFieldsDTO): Promise<void>
}