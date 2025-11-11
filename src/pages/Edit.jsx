import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";



const Edit = () => {
  const { register,handleSubmit,setValue } = useParams();
  const { userId } = useParams();

  const getDetails = async()=> {
    const {data} = await axios.get(`${import.meta.env.VITE.BURL}/users/${userId}`);
     setValue("userName",data.user.userName);
     setValue("email",data.user.email);
     setValue("phone",data.user.phone);
  }

  useEffect(() => {  
    getDetails();
  },[])

  const updateForm =async(value)=>{
        e.preventDefault();

    const{data}= await axios.put(`https://node-react-10.onrender.com/users/${userId}`,
   {userName:value.userName})
    navigate(`/`);
  }


  return (
    <div>
      <h2> Edit User</h2>
      <form onSubmit={handleUpdate} className="w-50">
        <input type="text" className="form-control mb-2"
          value={name} onChange={(e) => setName(e.target.value)} required />

        <input type="email" className="form-control mb-2"
          value={email} onChange={(e) => setEmail(e.target.value)} required />

        <button className="btn btn-warning">Update</button>
      </form>
    </div>
  );
};

export default Edit;