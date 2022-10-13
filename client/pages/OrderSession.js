import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import OrderSessionProduct from "../components/OrderSessionProduct";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { connect } from "react-redux";
import cart, { fetchCart } from "../store/cart";
import Navbar from "../components/Navbar";

const OrderSession = (props) => {
  let myCart = props.cart.products;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (myCart !== undefined) {
      setTotal(calculateTotal(myCart));
    }
  }, [myCart]);

  useEffect(() => {
    props.fetchCart();
  }, []);

  const handleCheckout = async () => {
    const { data: url } = await axios.post(
      "/api/stripe/create-checkout-session",
      {
        items: myCart,
      }
    );
    window.location.href = url;
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto lg:w-3/4">
        <h1 className="text-white text-4xl text-center my-4">My Cart</h1>
        <div className="flex justify-between text-white text-2xl mx-3">
          <h2 className="w-20">Product</h2>
          <h2>Quantity</h2>
          <h2 className="w-20">Price</h2>
          <h2 className="hidden lg:inline text-white text-2xl w-32 text-center">
            Total
          </h2>
        </div>
        <Divider />
        {myCart === undefined
          ? ""
          : myCart.map((product) => (
              <OrderSessionProduct
                key={product.id}
                product={product}
                cart={myCart}
              />
            ))}
        <strong>
          <p className="text-white text-center text-3xl mt-3 flex justify-around">
            <span>Total: </span>
            <span>${total.toFixed(2)}</span>
          </p>
        </strong>
        <div className="min-w-full text-center my-3">
          <button
            onClick={handleCheckout}
            className="text-black bg-yellow-400 rounded-lg text-2xl px-2"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

const calculateTotal = (myCart) => {
  return myCart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const mapDispatch = (dispatch) => {
  return {
    fetchCart: () => {
      dispatch(fetchCart());
    },
  };
};
const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapState, mapDispatch)(OrderSession);
