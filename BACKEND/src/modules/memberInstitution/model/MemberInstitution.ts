import mongoose from "mongoose";

const MemberInstitutionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    institutionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Institution"
    },
    role: {
        type: String,
        enum: ["admin", "member", "viewer"],
        default: "member"
    },
}, { timestamps: true });


export const MemberInstitutionModel = mongoose.model("MemberInstitution", MemberInstitutionSchema)