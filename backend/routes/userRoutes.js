import express, { application } from "express";
import mongoose from "mongoose";
import User from "../models/users.js";

const router=express.Router();

router.post('/create', async (req, res) => {
    const { name, email, age } = req.body;
    console.log(name,email,age);
    try {
        const addUser = await User.create({
            name: name,  //backend column name : input value by user
            email: email,
            age: age
        });
        console.log("mongodb added data");
        console.log(addUser);
        res.send(200).json(addUser);
    } catch (error) {
        console.log("couldn't add user");
    }
});

router.get('/read', async (req, res) => {
    try {
        const result = await User.find();
        return res.json(result);
        // console.log(result);
    } catch (err) {
        console.log("couldn't get all users");
    }
});

router.get('/:id',async (req,res)=>{
    const {id}=req.params;
    try {
        const result=await User.findById({_id:id});
        return res.json(result);
        // console.log(result);
    } catch (error) {
        console.log(error);
        return res.json({});
    }
});

router.patch('/update/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const {name,email,age}=req.body;
        const result=await User.findByIdAndUpdate({_id:id},req.body,{new:true});
        return res.json(result);
        console.log(result);     
    } catch (error) {
        console.log(error);
    }
});

router.delete('/delete/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const result=await User.findByIdAndDelete({_id:id});
        console.log(result);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
});


export default router;