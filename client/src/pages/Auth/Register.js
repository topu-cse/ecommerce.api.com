import React from 'react';
import Layout from '../../components/Layout/Layout';

const Register = () => {
    return (
        <Layout title={'Register - Ecomerce shop'}>
            <div className="register">
                <h1>register page</h1>
      <form>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputName" placeholder='Enter your name' />  
  </div>

  <div className="mb-3">
    
    <input type="email" className="form-control" id="exampleInputName"  placeholder='Enter your Enmai' />  
  </div>

  <div className="mb-3">
    
    <input type="password" className="form-control" id="exampleInputPassword1"   placeholder='password ***'/>
  </div>

  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputName"  placeholder='phone' />  
  </div>

  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPassword1"  placeholder='Address' />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

            </div>
        </Layout>
    );
};

export default Register;