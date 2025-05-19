import { ISignInDTO } from "../../auth/dto/ISignInDTO";
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { UserModel } from "../model/User";

export interface IUserRepository {
    create({ birthDate, email, name, password, avatar, coverPhoto, activationCodeExpiresAt, activationCode, gender }: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<typeof UserModel | any>
    findById(id: string): Promise<typeof UserModel | any>
    findByPhoneNumber(phoneNumber: string): Promise<typeof UserModel | any>
    activateAccountByEmail(email: string, data: any): Promise<void>
    updateByEmail(email: string, data: any): Promise<void>
    findByEmailOrPassword(identifier: string): Promise<any>
    findProfileById(id: string): Promise<typeof UserModel | null>;
    updateAvatar(id: string, avatar: string): Promise<void>;
    updateCover(id: string, cover: string): Promise<void>;
    updateName(userId: string, newName: string): Promise<void>;
    updateEmail(userId: string, newEmail: string): Promise<void>;
    updatePhoneNumber(userId: string, newPhoneNumber: string): Promise<void>;
    updateBirthDate(userId: string, newBirthDate: Date): Promise<void>;
    updateLevel(userId: string, newLevel: number): Promise<void>;
    updatePoints(userId: string, pointsToAdd: number): Promise<void>;
    updateGender(userId: string, newGender: string): Promise<void>;
    updatePassword(userId: string, newPassword: string): Promise<void>;
    delete(id: string): Promise<void>;
}