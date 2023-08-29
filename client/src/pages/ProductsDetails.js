import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductsDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
    //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    //   getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
    return (
       <Layout>
             <div className="row container mt-3">
                <div className="col-md-6">
                <img
                    src={`/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top h-75 w-75 img-fluid"
                    alt={product.name}
                  />
                </div>
                <div className="col-md-6 text-center">
                    <h1>Product Details</h1>
                    <h4>Name: {product.name}</h4>
                    <h6>Description : {product.description}</h6>
                    <h6>Price :${product.price}</h6>
                    <button class="btn btn-secondary ms-1">ADD TO CART</button>
                </div>
                </div>   
                <div className="row">similar products</div>     
       </Layout>
    );
};

export default ProductsDetails;