import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';

const Register = () => {

      const[name,setName]=useState('')
      const[email,setEmail]=useState('')
      const[password,setPassword]=useState('')
      const[phone,setPhone]=useState('')
      const[address,setAddress]=useState('')


    return (
        <Layout title={'Register - Ecomerce shop'}>
            <div className="register ">
                <h1 className='mb-3'>Register page</h1>
      <form>
  <div className="mb-3">
    <input type="text" 
    value={name}
    onChange={(e)=>setName(e.target.value)}
     className="form-control"
      id="exampleInputName"
       placeholder='Enter your name' />  
  </div>

  <div className="mb-3">
    <input type="email"
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
      className="form-control"
       id="exampleInputName"
       placeholder='Enter your Enmai' />  
  </div>

  <div className="mb-3">
    <input type="password"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
      className="form-control"
       id="exampleInputPassword1" 
         placeholder='password ***'/>
  </div>

  <div className="mb-3">
    <input type="text"
     value={phone}
     onChange={(e)=>setPhone(e.target.value)}
      className="form-control"
       id="exampleInputName" 
        placeholder='phone' />  
  </div>

  <div className="mb-3">
    <input type="text"
     value={address}
     onChange={(e)=>setAddress(e.target.value)}
      className="form-control"
       id="exampleInputPassword1" 
        placeholder='Address' />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

            </div>
        </Layout>
    );
};

export default Register;