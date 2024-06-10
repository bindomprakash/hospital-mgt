import mongoose, { Schema } from "mongoose";

const videoSchema = new mongoose.Schema({
    videofile: {
        type: String,
        require: true,
    },
    thumbnail: {
        type: String // cloudinary
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        title: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    duration: {
        type: Number,
        require: true
    },
    views: {
        type: Number,
        require: true
    }
}, { timestamps: true })