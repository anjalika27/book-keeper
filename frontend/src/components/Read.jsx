import React, { useEffect, useState } from 'react';
import './Read.css';
import axios from "axios";
import {Link} from "react-router-dom";

function Read() {

  const [data, setData] = useState([]);

  async function getData() {
    await axios.get("http://localhost:3000/read").then((result) => {
      setData(result.data);
    }).catch((e) => {
      console.log(e);
    })
  }

  async function handleDelete(id){
    await axios.delete(`http://localhost:3000/delete/${id}`).then(()=>{
      console.log("deleted");
    }).catch((err)=>{
      console.log(err);
    })
  }

  // first render
  useEffect(() => {
    getData();
  }, []);



  return (
    <div className='container read'>
      <div className="row">
        {data?.map((d) => {
          return (
            <div className="col-3 my-2">
              <div key={data._id} className="card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{d.name}</li>
                  <li className="list-group-item">{d.email}</li>
                  <li className="list-group-item">{d.age}</li>
                  <li className="list-group-item">
                    <Link to={`/update/${d._id}`}>Edit</Link>
                    <a href="" onClick={()=>handleDelete(d._id)}>Delete</a>
                  </li>
                </ul>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Read
