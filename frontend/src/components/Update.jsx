import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

function Update() {

  const [curr, setCurr] = useState({
    name:"",
    email:"",
    age:0
  });
  const data={};

  const { id } = useParams(); // to get id of curr user

  async function getCurrData() {
    await axios.get(`http://localhost:3000/${id}`).then((response) => {
      // console.log(response.data);
      setCurr(response.data);
      console.log("data");
      console.log(curr);
    }).catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    getCurrData();
  }, []);


  function handleChange(e){
    
  }

  async function handleEdit(id){
    // setCurr(updated);
    // await axios.patch(`http://localhost:3000/update/${id}`,curr).then((response)=>{
    //   console.log('edited');
    // console.log(curr);
    // })
  }

  return (
    <div>
      <div className='container create'>
           
        <form method='POST' onSubmit={()=> handleEdit(id)}>

          <div className="mb-3">
            <label for="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={curr.name} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={curr.email} onChange={handleChange} />
            <div id="emailHelp" className="form-text"><p>We'll never share your email with anyone else.</p></div>
          </div>

          <div className="mb-3">
            <label for="age" className="form-label">Age</label>
            <input type="number" className="form-control" id="age" value={curr.age} onChange={handleChange} />
          </div>

        <button type="submit" className="btn btn-primary" >Update</button>
        </form>
             
      </div>
    </div>
  )
}

export default Update
