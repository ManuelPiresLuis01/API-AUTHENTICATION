import mongoose from "mongoose";
import { ISignInDTO } from "../../../auth/dto/ISignInDTO";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { UserModel } from "../../model/User";
import { IUserRepository } from "../IUserRepository";


export class UserRepository implements IUserRepository {

    private repository: typeof UserModel;
    constructor() {
        this.repository = UserModel;
    }
    async findById(id: string): Promise<typeof UserModel | any> {
        const user = await this.repository.findOne({ _id: id });
        return user;
    }

    async create({ birthDate, email, name, password, avatar, coverPhoto, phoneNumber, activationCode, activationCodeExpiresAt, gender }: ICreateUserDTO): Promise<void> {
        await this.repository.create({ birthDate, email, name, password, avatar, coverPhoto, phoneNumber, activationCode, activationCodeExpiresAt, gender });
    }
    async findByEmail(email: string): Promise<typeof UserModel | any> {
        const user = await this.repository.findOne({ email });
        return user;
    }

    async findByPhoneNumber(phoneNumber: string): Promise<typeof UserModel | any> {
        const user = await this.repository.findOne({ phoneNumber });
        return user;
    }
    async activateAccountByEmail(email: string, data: any): Promise<void> {
        await this.repository.findOneAndUpdate({ email }, { ...data });
    }

    async updateByEmail(email: string, data: any): Promise<void> {
        await this.repository.findOneAndUpdate({ email }, { ...data });
    }

    async findByEmailOrPassword(identifier: string): Promise<any> {
        const user = await this.repository.findOne({ $or: [{ phoneNumber: identifier }, { email: identifier }] }).select("password _id isActive")
        return user
    }
    async findProfileById(id: string): Promise<typeof UserModel | null> {
        const user = await this.repository.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(id) }
            },
            {
                $project: {
                    id: "$_id",
                    name: 1,
                    email: 1,
                    phoneNumber: 1,
                    gender: 1,
                    avatar: 1,
                    coverPhoto: 1,
                    birthDate: 1,
                    level: 1,
                    points: 1,
                }
            },
            {
                $addFields: {
                    _id: "$$REMOVE"
                }
            }
        ]);

        return user[0];
    }

    async updateAvatar(id: string, avatar: string): Promise<void> {
        await this.repository.findByIdAndUpdate(
            id,
            { avatar }
        );
    }

    async updateCover(id: string, cover: string): Promise<void> {
        await this.repository.findByIdAndUpdate(
            id,
            { coverPhoto: cover }
        );
    }

    async updateName(userId: string, newName: string): Promise<void> {
        await this.repository.findByIdAndUpdate(
            userId,
            { name: newName }
        );
    }

    async updateEmail(userId: string, newEmail: string): Promise<void> {
        await this.repository.findByIdAndUpdate(
            userId,
            { email: newEmail },
        );
    }

    async updatePhoneNumber(userId: string, newPhoneNumber: string): Promise<void> {
        await this.repository.findByIdAndUpdate(
            userId,
            { phoneNumber: newPhoneNumber },
        );
    }

    async updateBirthDate(userId: string, newBirthDate: Date): Promise<void> {
        await this.repository.findByIdAndUpdate(
            userId,
            { birthDate: newBirthDate },
        );
    }

    async updateLevel(userId: string, newLevel: number): Promise<void> {
        await this.repository.findByIdAndUpdate(
            userId,
            { level: newLevel },
        );
    }

    async updatePoints(userId: string, pointsToAdd: number): Promise<void> {
        await this.repository.findByIdAndUpdate(
            userId,
            { $inc: { points: pointsToAdd } },
        );
    }

    async updateGender(userId: string, newGender: string): Promise<void> {
        await this.repository.findByIdAndUpdate(
            userId,
            { gender: newGender },
        );
    }

    async updatePassword(userId: string, newPassword: string): Promise<void> {
        await this.repository.findByIdAndUpdate(
            userId,
            { password: newPassword }
        );
    }

    async delete(id: string): Promise<void> {
        await this.repository.deleteOne(
            { _id: new mongoose.Types.ObjectId(id) }
        );
    }
}