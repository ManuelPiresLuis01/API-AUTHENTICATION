import mongoose from "mongoose";
import { ICreateMemberInstitutionDTO } from "../../dto/ICreateMemberInstitutionDTO";
import { MemberInstitutionModel } from "../../model/MemberInstitution";
import { IMemberInstitutionRepository } from "../IMemberInstitutionRepository";

class MemberInstitutionRepository implements IMemberInstitutionRepository {

    private repository: typeof MemberInstitutionModel

    constructor() {
        this.repository = MemberInstitutionModel
    }
    async findByUserIdAndInstitutionId(userId: string, institutionId: string): Promise<any> {
        const member = await this.repository.findOne({ $and: [{ userId }, { institutionId }] })

        return member
    }

    async create({ institutionId, userId, role }: ICreateMemberInstitutionDTO): Promise<void> {
        await this.repository.create({ institutionId, userId, role })
    }

    async findInstitutionsByUserId(userId: string): Promise<any[]> {
        const institutions = await this.repository.aggregate([
            {
                $match: { userId: new mongoose.Types.ObjectId(userId) }
            },
            {
                $lookup: {
                    from: "intitutions",
                    localField: "institutionId",
                    foreignField: "_id",
                    as: "institutionDetails"
                }
            },
            {
                $unwind: "$institutionDetails"
            },
            {
                $replaceRoot: { newRoot: "$institutionDetails" }
            },
            {
                $project: {
                    id: '$_id',
                    name: 1,
                    description: 1,
                    logo: 1,
                }
            },
            {
                $addFields: {
                    _id: "$$REMOVE"
                }
            }
        ]);
    
        return institutions;
    }

    async findMembersByInstitutionId(institutionId: string): Promise<any[]> {
        const members = await this.repository.aggregate([
            { 
                $match: { institutionId: new mongoose.Types.ObjectId(institutionId) }
            },
            { 
                $lookup: { 
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "userDetails"
                } 
            },
            { 
                $unwind: "$userDetails"
            },
            { 
                $replaceRoot: { 
                    newRoot: { 
                        $mergeObjects: ["$userDetails", { role: "$role" }]
                    } 
                } 
            },
            { 
                $project: { 
                    id: 1,
                    name: 1,
                    avatar: 1,
                    level: 1,
                    points: 1,
                    role: 1
                } 
            },
            { 
                $addFields: { 
                    id: "$_id",
                    _id: "$$REMOVE",
                } 
            },
        ]);
    
        return members;
    }

    async updateMemberRole(userId: string, institutionId: string, newRole: string): Promise<void> {
        await this.repository.updateOne(
            { 
                userId: new mongoose.Types.ObjectId(userId), 
                institutionId: new mongoose.Types.ObjectId(institutionId) 
            },
            { 
                $set: { role: newRole } 
            }
        );
    }

    async delete(userId: string, institutionId: string): Promise<void> {
        await this.repository.deleteOne({
            userId: new mongoose.Types.ObjectId(userId),
            institutionId: new mongoose.Types.ObjectId(institutionId)
        });
    }
}

export { MemberInstitutionRepository };
