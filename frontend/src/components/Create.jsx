import React, { useState } from 'react';
import axios from "axios";
import './Create.css';
import {useNavigate} from "react-router-dom";


function Create() {
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState();
    
    const navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const data={name,email,age};
        console.log("submitting")
        try {
            console.log("axios start");
            const response=await axios.post('http://localhost:3000/create',data).then(()=>{
                //pura url with endpoint dena h
                // console.log('posted to backend')
                navigate("/read");
            }).catch((err)=>{
                console.log("axios failed");
                console.log(err);
            });
            console.log(response.data.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <div className='container create'>
            <form method='POST' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} on onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text"><p>We'll never share your email with anyone else.</p></div>
                </div>
                <div className="mb-3">
                    <label for="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>
                
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Create
