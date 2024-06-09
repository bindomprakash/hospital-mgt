import dotenv from 'dotenv'
import connect_DB from "./db/connection.js";

dotenv.config({path: '.env'});

connect_DB()



































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

