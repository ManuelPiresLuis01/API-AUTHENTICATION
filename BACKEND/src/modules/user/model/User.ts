import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    gender: {
        type: String,
        enum: ["masculine", "feminine", "other"]
    },
    avatar: {
        type: String,
        default: ""
    },
    coverPhoto: {
        type: String,
        default: ""
    },
    birthDate: {
        type: Date,
        require: true
    },
    level: {
        type: Number,
        default: 1
    },
    points: {
        type: Number,
        default: 0
    },
    coursesTaught: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }],
    activationCodeExpiresAt: {
        type: Date
    },
    activationCode: {
        type: Number
    },
    resetCodeExpiresAt: {
        type: Date
    },
    resetCode: {
        type: Number
    },
    isActive: {
        type: Boolean,
        default: false
    },
    institution: {
        type: mongoose.Types.ObjectId,
        ref: "Intitution"
    }

}, {
    timestamps: true
});


export const UserModel = model("User", userSchema);

