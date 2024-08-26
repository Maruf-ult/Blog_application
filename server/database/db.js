import mongoose from "mongoose";

export const dbCon = async()=>{   
try {
  await mongoose.connect('mongodb://localhost:27017/Blog_App')
     console.log(`database connected successfully`)

} catch (error) {
     console.log(error);
}
}