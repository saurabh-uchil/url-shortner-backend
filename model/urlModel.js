import mongoose from 'mongoose';

//Model Schema for storing in Db

const Schema = mongoose.Schema;

const urlSchema = new Schema({
    url:{
        type: String,
        required: true
    },
    shortenedUrl:{
        type: String, 
        required:true
    },
    visitHistory: [{
    type: Date
  }],
},{timestamps:true});

export const urlModel = mongoose.model('url', urlSchema);