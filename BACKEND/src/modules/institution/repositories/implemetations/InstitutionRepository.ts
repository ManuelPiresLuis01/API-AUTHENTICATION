import mongoose from "mongoose";
import { ICreateInstitutionDTO } from "../../dto/ICreateInstitutionDTO";
import { InstitutionModel } from "../../model/Institution";
import { IInstitutionRepository } from "../IInstitutionRepository";
import { UpdateInstAllFieldsDTO } from "../../../profile/dto/updateInstAllFieldsDTO";



export class InstitutionRepository implements IInstitutionRepository {
    private repository: typeof InstitutionModel
    constructor() {
        this.repository = InstitutionModel;
    }
    async findById(id: string): Promise<any> {
        const institution = await this.repository.findOne({ _id: id })

        return institution
    }
    async create({ name, address, institutionalEmail, representative, banner, description, logo, phone }: ICreateInstitutionDTO): Promise<any> {
        return await this.repository.create({ phone, name, address, institutionalEmail, representative, banner, description, logo })
    }
    async findByEmail(email: string): Promise<any> {
        const institution = await this.repository.findOne({ institutionalEmail: email })

        return institution
    }
    async findByName(name: string): Promise<any> {
        const institution = await this.repository.findOne({ name })
        return institution
    }
    async findByPhone(phone: string): Promise<any> {
        const institution = await this.repository.findOne({ phone })

        return institution
    }

    async findProfileById(id: string): Promise<any> {
        const institution = await this.repository.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(id) }
            },
            {
                $project: {
                    id: "$_id",
                    name: 1,
                    address: 1,
                    institutionalEmail: 1,
                    representative: 1,
                    banner: 1,
                    description: 1,
                    logo: 1,
                    phone: 1
                }
            },
            {
                $addFields: {
                    _id: '$$REMOVE'
                }
            }
        ]);

        return institution[0]
    }

    async updateName(id: string, name: string): Promise<void> {
        await this.repository.findByIdAndUpdate(id, { name }, { new: true });
    }

    async updateAddress(id: string, address: string): Promise<void> {
        await this.repository.findByIdAndUpdate(id, { address }, { new: true });
    }

    async updateInstitutionalEmail(id: string, institutionalEmail: string): Promise<void> {
        await this.repository.findByIdAndUpdate(id, { institutionalEmail }, { new: true });
    }

    async updateRepresentative(id: string, representative: string): Promise<void> {
        await this.repository.findByIdAndUpdate(id, { representative }, { new: true });
    }

    async updateBanner(id: string, banner: string): Promise<void> {
        await this.repository.findByIdAndUpdate(id, { banner }, { new: true });
    }

    async updateDescription(id: string, description: string): Promise<void> {
        await this.repository.findByIdAndUpdate(id, { description }, { new: true });
    }

    async updateLogo(id: string, logo: string): Promise<void> {
        await this.repository.findByIdAndUpdate(id, { logo }, { new: true });
    }

    async updatePhone(id: string, phone: string): Promise<void> {
        await this.repository.findByIdAndUpdate(id, { phone }, { new: true });
    }

    async delete(id: string): Promise<void> {
        await this.repository.findByIdAndDelete(id);
    }

    async updateAllFields({
        instId,
        name,
        institutionalEmail,
        address,
        description,
        representative,
        banner,
        logo,
        phone
    }: UpdateInstAllFieldsDTO): Promise<void> {

        const instData = {
            name,
            institutionalEmail,
            address,
            description,
            representative,
            banner,
            logo,
            phone
        };

        await this.repository.findByIdAndUpdate(instId, instData, { new: true });
    }
}