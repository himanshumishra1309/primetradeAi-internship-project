import { app } from "./app";
import dotenv from "dotenv";
import connectDB from "./db";

dotenv.config({
  path: './env'
})

connectDB.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server Running on port: ${process.env.PORT}`);
  })
}).catch((err)=> {
  console.log(err);
})