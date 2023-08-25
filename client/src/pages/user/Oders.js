import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserManu from '../../components/Layout/UserManu';

const Oders = () => {
    return (
        <Layout title={"Dashboard Orders"}>
            <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
                <UserManu/>
            </div>
        
             <div className="col-md-9">
            <h1>Oders</h1>
             </div>
        </div>
        </div>
     </Layout>
    );
};

export default Oders;