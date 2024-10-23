import mongoose, { Types } from "mongoose"
import { Schema } from "mongoose"

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        unique: true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

}, {timestamps: true})

export default mongoose.model("User", UsersSchema)