import mongoose, { Types } from "mongoose"
import { Schema } from "mongoose"


const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    roomNumbers: [{
        number: Number,
        unavailableDate: [{type: Date}]
    }],
    /*
    [
        {number: 101, unavailableDate: [01.05.2024, 21.05.2024 ]}
    ]
    */
}, {timestamps: true})

export default mongoose.model("Room", RoomSchema)