import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import toast from 'react-hot-toast';
import axios from 'axios';
import CategoryFrom from '../../components/Form/CategoryFrom';
const CreateCategori = () => {
    const [categories,setCategoris]=useState([])
     const [name,setNname]=useState('')
     //handle From
     const handleSubmit=async(e)=>{
       e.preventDefault()
       try{
       const {data}=await axios.post('/api/v1/category/create-category',{name})
       if(data?.success){
        toast.success(`${name} is created`)
        getAllCategory()
       }
       else{
        toast.error(data.message)
       }
       }catch(error){
        console.log(error)
        toast.error('somthing went wrong in input from')
       } 
     } 
    //get all category
    const getAllCategory=async()=>{
        try{
           const{data}=await axios.get('/api/v1/category/get-category')
           if(data.success){
            setCategoris(data.category);
           }
        }catch(error){
            console.log(error)
            toast.error('Something went wrong in getting category')
        }
    }

    useEffect(()=>{
        getAllCategory();
    },[])
    return (
         <Layout title={"Dashboard create-categori"}>
            <div className="container-fluid"> 
            <div className="row">
                <div className="col-md-3 ">
                    <AdminMenu  />
                </div>
            
                 <div className="col-md-9">
                <h1>Manage Category</h1>
                <div className="p-3 w-50">
                    <CategoryFrom handleSubmit={handleSubmit}
                    value={name}
                    setValue={setNname}/>
                </div>
                <div className='w-75'>
                <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
                  {categories?.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td>
                          {/* <button
                            className="btn btn-primary ms-2"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                          >
                            Edit
                          </button> */}
                          {/* <button
                            className="btn btn-danger ms-2"
                            onClick={() => {
                              handleDelete(c._id);
                            }}
                          >
                            Delete
                          </button> */}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
</table>

                </div>
                 </div>
            </div>
            </div>
         </Layout>
    );
};

export default CreateCategori;