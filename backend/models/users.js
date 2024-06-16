import mongoose from "mongoose";

// created user schema or made the blueprint of collection
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    }
},{timestamps:true}); // time of creation of object bhi add hoga as a field 


// create collection model
const User=mongoose.model('User',userSchema); //(nameofCollection,blueprint)

//now if check the mongodb compass it will show our db and User collection 

export default User;