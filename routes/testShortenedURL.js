import express from 'express';
import { urlModel } from '../model/urlModel.js';

export const router = express.Router();

//Get Route
//When we visit the shortened URL it redirects to the actual URL

router.get("/:shortURL", async(req,res)=>{
     try {
            const {shortURL} = req.params;
            const response = await urlModel.findOne({"shortenedUrl":shortURL});
            if(response){
                const data = await urlModel.updateOne({"shortenedUrl":shortURL}, {$push: { visitHistory: new Date()}})
                //console.log("Visited: "+shortURL+" Updated Visited Array: "+data.modifiedCount);
                res.redirect(response.url);
            }
            else{
                res.status(404).json({message:"Cannot find the address in the db.."})
            }
        } catch (error) {
            res.status(500).json({msg:"Internal Server Error"});
        }
});