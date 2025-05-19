import { hash } from "bcrypt";
import { AppError } from "../../../../shared/error/AppError";
import { ICreateUserDTO } from "../../../user/dto/ICreateUserDTO";
import { IUserRepository } from "../../../user/repositories/IUserRepository";
import crypto from "crypto"
import { mailTransport } from "../../../../shared/config/nodemailer";
import { returnEmailTempleteActivation } from "../../../../shared/utils/returnEmailTemplete";


export class SignUpUseCase {
  constructor(private userRepository: IUserRepository) { }

  sendCodeAtivation(name: string, email: string, activationCode: number, gender: string) {
    let h2 = ""
    switch (gender) {

      case "masculine":
        h2 = "Bem-vindo à BSmart! 🎉";
        break;
      case "feminine":
        h2 = "Bem-vinda à BSmart! 🎉"
        break;
      default:
        h2 = "Bem-vindo(a) à BSmart! 🎉"
        break;
    }

    const title = "Ativação da Conta"
    const description = "Obrigado por se cadastrar! Para activar a sua conta, utilize o código de activação abaixo:"

    const html = returnEmailTempleteActivation(title, h2, name, activationCode, description)

    mailTransport.sendMail({
      from: `BSmart <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Activation Account",
      html
    })
  }

  async execute({ name, email, password, birthDate, phoneNumber, gender }: ICreateUserDTO) {

    const emailAlreadyExists = await this.userRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("Email Already Exists", 409);
    }

    if (phoneNumber) {
      const phoneNumberAlreadyExists = await this.userRepository.findByPhoneNumber(phoneNumber);

      if (phoneNumberAlreadyExists) {
        throw new AppError("Phone Number Already Exists", 409);
      }
    }

    const passwordHash = await hash(password, Number(process.env.BCRYPT_SALT_ROUNDS));

    const activationCode = crypto.randomInt(100000, 999999);
    const activationCodeExpiresAt = new Date();
    activationCodeExpiresAt.setMinutes(activationCodeExpiresAt.getMinutes() + 5);

    await this.userRepository.create({ name, email, password: passwordHash, birthDate, phoneNumber, activationCodeExpiresAt, activationCode, gender });

    this.sendCodeAtivation(name, email, activationCode, gender);

  }
}