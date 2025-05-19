

export interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    avatar?: string;
    coverPhoto?: string;
    birthDate: Date;
    phoneNumber?: string;
    activationCodeExpiresAt?: Date;
    activationCode?: number;
    gender: string;
}