import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    bodyMeasurement: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    city: {
        type: String
    },
    profilePic: {
        type: String,
        // required: true
        default:""
    }
}, { timestamps: true })

export default mongoose.model("User", UserSchema)