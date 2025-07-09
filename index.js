import express from 'express';
import { connectToDb } from './model/mongoose.js';
import { router as testShortenedURLRoute } from './routes/testShortenedURL.js';
import { router as shortenURLRoute } from './routes/shortenURL.js';
import { router as analyticsRoute } from './routes/analytics.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

//Connect To Mongo Db Atlas
connectToDb();

//Routes
app.use("/test", testShortenedURLRoute);
app.use("/shortenURL", shortenURLRoute);
app.use("/analytics", analyticsRoute);

//Listen 
app.listen(port, ()=>{
    console.log("Listening on port: "+port);
});



