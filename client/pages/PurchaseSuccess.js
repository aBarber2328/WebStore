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
      <div className="text-8xl text-white">Purchase Success!</div>
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
