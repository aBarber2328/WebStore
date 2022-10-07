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

  // const updateOrderSession = async () => {
  //   const newCart = cartRef.current.map((item) => ({
  //     quantity: item.productOrderSessions.quantity,
  //     orderSessionId: item.productOrderSessions.orderSessionId,
  //     productId: item.productOrderSessions.productId,
  //   }));

  //   await axios.put("/api/order-session/", {
  //     token: window.localStorage.token,
  //     cart: newCart,
  //   });
  // };

  useEffect(() => {
    if (myCart !== undefined) {
      setTotal(calculateTotal(myCart));
    }
  }, [myCart]);

  useEffect(() => {
    props.fetchCart();
  }, []);

  const handleCheckout = async () => {
    await axios.post("/api/stripe/create-checkout-session", { items: myCart });
  };

  return (
    <>
      <Navbar />
      <div className="order-session">
        <h1 className="text-white text-4xl text-center my-4">My Cart</h1>
        <div className="flex justify-between text-white text-2xl">
          <h2>Product</h2>
          <h2>Quantity</h2>
          <h2>Price</h2>
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
