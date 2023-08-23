import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {

      const[name,setName]=useState('')
      const[email,setEmail]=useState('')
      const[password,setPassword]=useState('')
      const[phone,setPhone]=useState('')
      const[address,setAddress]=useState('')
      const navigate=useNavigate();
    //form function
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const res = await axios.post("/api/v1/auth/register", {
          name,
          email,
          password,
          phone,
          address,
          
        });
        if(res.data.success){
          // alert('Register succesfully')
          toast.success(res.data.message)
          navigate('/')
        }
        else{
          toast.error(res.data.message)
        }
      }
        catch(error){
        console.log(error)
        toast.error('Something went wrong')
      }
    }

    return (
        <Layout title={'Register - Ecomerce shop'}>
            <div className="register ">
                <h1 className='mb-3'>Register page</h1>
      <form  onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text" 
    value={name}
    onChange={(e)=>setName(e.target.value)}
     className="form-control"
      id="exampleInputName"
      required
       placeholder='Enter your name' /> 
       
  </div>

  <div className="mb-3">
    <input type="email"
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
      className="form-control"
       id="exampleInputEmail"
       required
       placeholder='Enter your Enmai' />  
  </div>

  <div className="mb-3">
    <input type="password"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
      className="form-control"
       id="current-password" 
       required
         placeholder='password ***'/>
  </div>

  <div className="mb-3">
    <input type="text"
     value={phone}
     onChange={(e)=>setPhone(e.target.value)}
      className="form-control"
       id="exampleInputPhone" 
       required
        placeholder='phone' />  
  </div>

  <div className="mb-3">
    <input type="text"
     value={address}
     onChange={(e)=>setAddress(e.target.value)}
      className="form-control"
       id="exampleInputaddress"
       required
        placeholder='Address' />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

            </div>
        </Layout>
    );
};

export default Register;