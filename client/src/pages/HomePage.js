import React from 'react';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../components/Context/Auth';

const HomePage = () => {
    const [auth,setAuth]=useAuth()
    return (
       
       <Layout title={'Best offers'}>
        <h1>Home page</h1>
        
       <pre>{JSON.stringify(auth,null,4)}</pre>

       </Layout>
    );
};

export default HomePage;