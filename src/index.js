import dotenv from 'dotenv'
import connect_DB from "./db/connection.js";
import { app } from './app.js';

dotenv.config({ path: '.env' });

connect_DB()
.then(async () => {
    try {
        app.listen(process.env.PORT || 7000, () => {
            console.log(`Server is running on port: ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Database connection Failed !!", error);
    }
}).catch((err)=>{
    console.log("Failed connection: ", err);
})



































// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import express from "express";
// const app = express();

// I have used IFFE FUNCTION

/*(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", () => {
            console.log("Error: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Application is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error: ", error);
        throw error;
    }
})()
    */

