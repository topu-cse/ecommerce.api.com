import React from 'react';
import Layout from '../components/Layout/Layout';
import { useCart } from '../components/Context/Cart';
import { useAuth } from '../components/Context/Auth';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const [cart,setCart]=useCart()
    const [auth,setAuth]=useAuth()
    const navigate=useNavigate()
    return (
        <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='text-center bg-light p-2'>
                                 {`Hello ${auth?.token && auth?.user?.name}`}
                                 
                            </h1>
                            <p className="text-center">
                {cart?.length
                  ? `You Have ${cart.length} items in your cart ${
                      auth?.token ? "" : "please login to checkout !"
                    }`
                  : " Your Cart Is Empty"}
              </p>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-7">cart Item</div>
                        <div className="col-md-5">Chekcout | Payment</div>
                    </div>


                </div>
               
        </Layout>
    );
};

export default CartPage;
