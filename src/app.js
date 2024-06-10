import cors from 'cors'
import express from 'express';
const app = express();
import bcrypt from 'bcrypt'

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(express.json()) // use for getting the data from body
app.use(express.urlencoded({extended: true, limit: "16kb"})) // use get the url data in the encoded form
app.use(express.static('public')) // use for get the public asset, like images,imoji etc.

async function bcyptPassword(){
  return await bcrypt.hash("omprakash123", 10)
}
console.log("bcrypt password: ",bcyptPassword());

export {app}