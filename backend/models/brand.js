import mongoose, { Schema } from "mongoose";
const brandSchema=new mongoose.Schema({
    name:{type:String,required:true},
    logo:{type:string},

});

export default mongoose.model('Brand',brandSchema);

