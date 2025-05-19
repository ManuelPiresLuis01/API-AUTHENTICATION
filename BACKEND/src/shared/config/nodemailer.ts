import nodemailer from "nodemailer";

export const mailTransport = nodemailer.createTransport({
    service: String(process.env.MAIL_SERVICE),
    auth: {
        user: String(process.env.MAIL_USER),
        pass: String(process.env.MAIL_PASS)
    }
})