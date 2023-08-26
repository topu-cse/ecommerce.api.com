import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const CreateCategori = () => {
    return (
         <Layout title={"Dashboard create-categori"}>
            <div className="container-fluid"> 
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu/>
                </div>
            
                 <div className="col-md-9">
                <h1>Creact Categori</h1>
                 </div>
            </div>
            </div>
         </Layout>
    );
};

export default CreateCategori;