import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchame = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        lowcase: true
    },
    email: {
        type: String,
        require: [true, 'Email is required ..'],
        unique: true,
        lowcase: true
    },
    fullname: {
        type: String,
        require: true,
        lowcase: true
    },
    avtar: {
        type: String, // cloudinary url
        require: true,
        lowcase: true
    },
    coverimage: {
        type: String, // cloudinary url
        require: true,
        lowcase: true
    },
    password: {
        type: String,
        require: true,
    },
    refreshToken: {
        type: String,
        require: true,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "video"
        }
    ]
}, { timestamps: true });

/* encrypt password */
userSchame.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next()
});
/* END */

/* decrpt password */
userSchame.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
/* END */

/* Generate Access token */
    userSchame.method.generateAccessToken = async function () {
        return await jwt.sign(
            {
                id: this.id,
                username: this.username,
                email: this.email,
                fullname: this.fullname
            },

            process.env.ACCESS_TOKEN,
            {
                expiresIn: ACCESS_TOKEN_EXPIRY
            }
        )
    }
/* end */

/* Generate Refresh Token */
    userSchame.method.generateRfreshToken = async function () {
        return await jwt.sign(
            {
                id: this.id,
            },

            process.env.REFRESH_TOKEN,
            {
                expiresIn: REFRESH_TOKEN_EXPIRY
            }
        )
    }
/*end */

export const userModel = mongoose.model("User", userSchame);