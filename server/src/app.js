import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./route/user.route.js";
import tweetRouter from "./route/tweet.route.js";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: "20kb"}));
app.use(express.urlencoded({extended:true, limit:"20kb"}));
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.json({message: "Healthy Server", success: true});
})

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tweets', tweetRouter);

export {app}