import { userModel } from "../models/user.model.js";
import { uploadCloudinary } from '../utility/cloudinary.js'

const userRegistration = async (req, res) => {
    const { username, fullname, email, password } = req.body;

   // validation on all field. 
    if ([username, fullname, email, password].some((field) => field?.trim() === "")) {
        console.error("All fields are required ...");
    }

    // check existing user and email.
    const existUser = await userModel.findOne({
        $or: [{ username }, { email }]
    });
    console.log("Exist user: ", existUser);

    if (existUser) {
        console.log("Already exist user");
    }

    // upload avtar image and coverImage
    console.log("Files: ",req.files);
    const avtarLocalPath = await req.files?.avtar[0]?.path;
    const coverLocalPath = await req.files?.coverimage?.path;

    if (!avtarLocalPath) {
        console.log("Avtar image is required");
    }

    const avtars = await uploadCloudinary(avtarLocalPath)
    const cover_image = await uploadCloudinary(coverLocalPath)

    if (!avtar) {
        console.log("Avtar image is required");
    }

    const userDetails = await userModel.create({
        username: username.toLowerCase(),
        fullname,
        email,
        avtar: avtars?.url,
        coverimage: cover_image?.url || "",
        password
    });

    const createUser = await userModel.findById(userDetails._id).select("-password -refreshToken");
    if (!createUser) {
        console.log("Something went wrong while user Register !!");
    }

    res.status(201).send(createUser);
}

export { userRegistration }