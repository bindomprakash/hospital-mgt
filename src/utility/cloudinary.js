import { v2 as cloudinary } from "cloudinary";
import fs from "fs";



const uploadCloudinarys = async (localFilePath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" });
        return response;
    } catch (error) {
        await fs.unlinkSync(localFilePath) // remove the local saved temprory file as the upload operation got failed.
        return null;
    }
}

export { uploadCloudinarys }