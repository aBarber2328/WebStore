import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import cart, { fetchCart, clearCart } from "../store/cart";
import Navbar from "../components/Navbar";

const PurchaseSuccess = (props) => {
  // Component did mount -> fetch cart
  let cart = props.cart.products;
  useEffect(() => {
    props.clearCart();
    window.localStorage.removeItem("cart");
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-black p-10 rounded-md flex flex-col justify-center text-center">
        <i className="text-lime-600" style={{ fontSize: "15rem" }}>
          ✓
        </i>
        <div className="text-4xl text-lime-600 font-black mb-8">
          Purchase Success!
        </div>
        <p className="text-white text-2xl">
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
      </div>
    </>
  );
};

const mapDispatch = (dispatch) => {
  return {
    fetchCart: () => {
      dispatch(fetchCart());
    },
    clearCart: () => {
      dispatch(clearCart());
    },
  };
};

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapState, mapDispatch)(PurchaseSuccess);
