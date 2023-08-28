import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import {Checkbox, Radio} from 'antd'
import { Prices } from '../components/Prices';

const HomePage = () => {
   
    const [products,setProducts]=useState([])
    const [categories,setCategories]=useState([])
    const [checked,setChecked]=useState([])
    const [radio,setRadio]=useState([])

     //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
     
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);


    //get all products
    const getAllProducts=async()=>{
        try{
           const {data}=await axios.get('/api/v1/product/get-product')
           setProducts(data.products)
        }catch(error){
            console.log(error)
        }
    }

    // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };


    return (
       
       <Layout title={'All Product - Best offers'}>
            
            <div className="row">
                <div className="col-md-3 mt-3 ">
                <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox className='ms-3'
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>

                       {/* price filter */}
                    <h6 className='text-center mt-4'>Filter By Price</h6>
                    <div className="d-flex flex-column ms-3">
                   <Radio.Group onChange={e=>setRadio(e.target.value)}>
                    {Prices?.map(p=>(
                        <div key={p._id}>

                            <Radio className='mt-1' value={p.array}>{p.name}</Radio>
                        </div>
                    ))}
                   </Radio.Group>
                    </div>



                </div>
                <div className="col-md-9">
                     
                   <h2 className='text-center mt-3'>All Products</h2>
                   <div className="d-flex flex-wrap">
                    
                    {products?.map((p) => (
             
                <div key={p._id} className="card   m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top img-fluid"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0,30)}</p>
                    <p className="card-text">Price: ${p.price}</p>
                    <button  className="btn btn-primary ms-1">More Details</button>
                    <button  className="btn btn-secondary ms-1">Add to Card</button>

                  </div>
                </div>
             
            ))}
                   </div>
                </div>
            </div>

       </Layout>
    );
};

export default HomePage;