import React, { useEffect, useState } from 'react';
import Layout from "./../components/Layout/Layout";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const CategoryProduct = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        if (params?.slug) getPrductsByCat();
      }, [params?.slug]);

    const getPrductsByCat=async()=>{
        try{
            const {data}=await axios.get( `/api/v1/product/product-category/${params.slug}`)
            setProducts(data?.products);
            setCategory(data?.category);
        }catch(error){
            console.log(error)
        }
    }
    return (
        <Layout>
             <div className="container mt-3">
             <h3 className='text-center'>Category - {category?.name}</h3>
             <h6 className='text-center'>{products?.length} result fount</h6>
             <div className="row">
             <div className="d-flex flex-wrap display-work">
                    
                    {products?.map((p) => (
             
                <div key={p._id} className="card card-list m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top  img-fluid"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0,30)}</p>
                    <p className="card-text">Price: ${p.price}</p>
                    <button  className="btn btn-primary ms-1" onClick={()=>navigate(`/product/${p.slug}`)}>More Details</button>
                    <button  className="btn btn-secondary ms-1">Add to Card</button>

                  </div>
                </div>
                
             
            ))}
                   </div>
                   {/* <div className='m-2 p-3'>
                   {products && products.length <total && (
                    <button className='btn btn-warning' onClick={(e)=>{
                      e.preventDefault();
                      setPage(page+1);
                    }}>
                      {loading? 'Loading ...' : 'Loadmore'}
                    </button>
                   )}

                   </div> */}
             </div>
             </div>
        </Layout>
    );
};

export default CategoryProduct;