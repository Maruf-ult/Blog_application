import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
     title:{
          type:String,
          required:true,
     },
     about:{
          type:String,
          required:true,
          unique:true,
     },
     image:{
          type:String,
          required:true,
     }
});

const bgModel = mongoose.model("bgModel",UserSchema);
export default bgModel;