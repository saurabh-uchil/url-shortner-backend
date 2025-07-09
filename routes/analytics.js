import express from 'express';
import { urlModel } from '../model/urlModel.js';

export const router = express.Router();


//Get Route
//Analytics route will track the visits and visit history

router.get("/:shortURL", async(req,res)=>{
           try {
                const {shortURL} = req.params;
                const response = await urlModel.findOne({"shortenedUrl":shortURL});
                if(response){
                    res.status(200).json({visits:response.visitHistory.length, history: response.visitHistory})
                }else{
                    res.status(404).json({message:"Cannot find the address in the db.."})
                } 
           } catch (error) {
            res.status(500).json({message: "Internal Server Error"});
           }
});