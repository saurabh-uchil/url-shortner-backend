import express from 'express';
import { urlModel } from '../model/urlModel.js';

export const router = express.Router();

//Post Route
//Shotens the URL and stores it in DB.
router.post("/", async (req, res)=>{
  try {
     const {url, shortenedUrl} = req.body;
     let response = await urlModel.insertOne({url, shortenedUrl, visitHistory: []});
     res.status(200).json({msg:response});
  } catch (error) {
    res.status(400).json({msg:error});
  }
});



