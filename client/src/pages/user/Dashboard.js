import React from 'react';
import Layout from '../../components/Layout/Layout'
import UserManu from '../../components/Layout/UserManu';

import { useAuth } from '../../components/Context/Auth';
const Dashboard = () => {
  const[auth,setAuth]=useAuth()
    return (
       
      <Layout>
        <div className="container-fluid">
            <div className="row ">
                <div className=" col-md-3">
                  <UserManu/>
                </div>
                <div className="col-md-9">
                  <div className="card p-3 w-75 ">
                     <h3>User name: {auth?.user?.name}</h3>
                     <h3>User email: {auth?.user?.email}</h3>
                     <h3>User phone: {auth?.user?.phone}</h3>
                  </div>
                </div>
            </div>
            
            </div> 
        </Layout>
    );
};

export default Dashboard;
