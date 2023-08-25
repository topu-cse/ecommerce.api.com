import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserManu from '../../components/Layout/UserManu';

const Profile = () => {
    return (
        <Layout title={"Dashboard Users-profile"}>
        <div className="container-fluid">
    <div className="row">
        <div className="col-md-3">
            <UserManu/>
        </div>
    
         <div className="col-md-9">
        <h1>Users Profile</h1>
         </div>
    </div>
    </div>
 </Layout>
    );
};

export default Profile;