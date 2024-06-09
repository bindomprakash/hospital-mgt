import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connect_DB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("Connection successfull !!", connectionInstance.connection.host);
    } catch (error) {
        console.log("MongoDB connection error: ", error);
    }
}
export default connect_DB;
// module.exports = connect_DB;