import mongoose, { Mongoose } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema  = new mongoose.Schema({

    id:{ type : string, required:true},
name:{ type : string, required:true},
email:{ type : string, required:true, unique:true},
imageUrl:{ type : string, required:true},
cartItems:{ type : Object, default:{} }

}, {minimize: false})

const User =Mongoose.models.user || Mongoose.model('user',userSchema)

export default User