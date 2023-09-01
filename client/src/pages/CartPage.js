import React from 'react';
import Layout from '../components/Layout/Layout';
import { useCart } from '../components/Context/Cart';
import { useAuth } from '../components/Context/Auth';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const [cart,setCart]=useCart()
    const [auth,setAuth]=useAuth()
    const navigate=useNavigate()

      //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

      //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
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
                        <div className="col-md-7">
                            {
                                 cart?.map((p)=>(
                                    <div className="row mb-2 card flex-row p-2">
                                    <div className="col-md-4"> <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top  img-fluid"
                    alt={p.name}
                    width="80%"
                      height={"100px"}
                  /></div>
                                    <div className="col-md-8">
                                    <p>{p.name}</p>
                    <p>{p.description.substring(0, 30)}</p>
                    <p>Price : ${p.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                                    </div>
                                </div>
                                 ))
                            }
                        </div>
                        <div className="col-md-5 text-center">
                             <h2>Cart Summary</h2>
                             <p>Total | Checkout | Payment</p>
                             <hr />
                             <h4>Total : {totalPrice()}</h4>
                        </div>
                    </div>


                </div>
               
        </Layout>
    );
};

export default CartPage;
