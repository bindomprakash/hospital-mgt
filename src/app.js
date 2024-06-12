import cors from 'cors';
import express from 'express';
const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN // use for front-end connection (Angular/React)
}))

app.use(express.json()) // use for getting the data from body
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // use get the url data in the encoded form
app.use(express.static('public')) // use for get the public asset, like images,imoji etc.

// import router 
import router from './routes/user.router.js';
app.use('/api/users', router); 

export { app }