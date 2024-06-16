import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // to store credentials in .env file for safety purposes
import cors from "cors";
import router from "./routes/userRoutes.js";

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

mongoose.connect(process.env.URI).then(()=>{
    console.log("connected db successfully");
    // if db connected then only run server
    app.listen(process.env.PORT || 3000,(req,res)=>{
        console.log("server running on http://localhost:3000");
    });
}).catch((err)=>{
    console.log(err.message);
});

app.use("",router);