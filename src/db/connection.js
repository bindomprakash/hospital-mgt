import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connect_DB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        // console.log(connectionInstance.connection);
        console.log("MongoDB Connection successfull !!", connectionInstance.connection.host);
    } catch (error) {
        console.log("MongoDB connection error: ", error);
    }
}
export default connect_DB;