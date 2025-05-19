import { Schema, model } from "mongoose";

const InstitutionSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    institutionalEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    representative: {
        type: String, // pode ser só o nome, ou depois tu pode linkar com User
        required: true,
    },
    banner: {
        type: String, // url da imagem
    },
    logo: {
        type: String, // url da imagem
    },
    phone: {
        type: String,
        unique: true // url da imagem
    },
}, { timestamps: true })



export const InstitutionModel = model("Intitution", InstitutionSchema);