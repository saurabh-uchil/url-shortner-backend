import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

//Connection URL
const URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_APP}.o6w0qg9.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_APP_NAME}`

//Connect to DB
export const connectToDb = () =>{
    mongoose.connect(URL).then(()=>{
    console.log("Db Connected Successfully..")
    }).catch(err=>console.log(err));
}
