import { userModel } from "../models/user.model.js";
import { uploadCloudinarys } from '../utility/cloudinary.js'

const userRegistration = async (req, res) => {
    const { username, fullname, email, password } = req.body;

    // validation on all field. 
    if ([username, fullname, email, password].some((field) => field?.trim() === "")) {
        // res.status(400).json({ message: "All fields are require.." });
        console.log("All fields are require..");
    }

    // check existing user and email.
    const existUser = await userModel.findOne({ $or: [{ username }, { email }] });

    if (existUser) {
        console.log("Already exist user");
    }

    // upload avtar image and coverImage

    const avtarLocalPath = await req.files?.avatar[0]?.path;
    const coverLocalPath = await req.files?.coverimage[0]?.path;

    if (!avtarLocalPath) {
        console.log("Avtar image is required");
    }

    const avatar = await uploadCloudinarys(avtarLocalPath);
    const coverimage = await uploadCloudinarys(coverLocalPath);
    console.log("avatar >>>", avatar.url);

    if (!avatar) {
        console.log("Avtar image is required");
    }

    if (avatar) {
        const userDetails = await userModel.create({
            username: req.body.username.toLowerCase(),
            email: req.body.email,
            fullname: req.body.fullname,
            avatar: avatar?.url,
            coverimage: coverimage?.url || "",
            password: req.body.password
        });
        const createUser = await userModel.findById(userDetails._id).select("-password -refreshToken");
        if (!createUser) {
            console.log("Something went wrong while user Register !!");
        }

        res.status(201).send(createUser);
    }



}


const getUser = async (req, res) => {
    try {
        res.json({ message: "Get user details..." })
    } catch (error) {
        console.log("Error: ", error);
    }
}

export { userRegistration, getUser }