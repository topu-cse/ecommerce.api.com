import React from 'react';
import Layout from './../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu';
import { useAuth } from '../../components/Context/Auth';
const Admin = () => {
    const[auth,setAuth]=useAuth()
    return (
         
        <Layout>
        <div className="container-fluid">
            <div className="row ">
                <div className=" col-md-3">
                  <AdminMenu/>
                </div>
                <div className="col-md-9">
                  <div className="card p-3 w-75 ">
                     <h3>Admin name: {auth?.user?.name}</h3>
                     <h3>Admin email: {auth?.user?.email}</h3>
                     <h3>Admin phone: {auth?.user?.phone}</h3>
                  </div>
                </div>
            </div>
            
            </div> 
        </Layout>
    );
};

export default Admin;