import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" });
        console.log("File path url :", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the local saved temprory file as the upload operation got failed.
        return null;
    }
}

export { uploadCloudinary }