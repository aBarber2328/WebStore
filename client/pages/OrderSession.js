import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import OrderSessionProduct from "../components/OrderSessionProduct";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { connect } from "react-redux";
import cart, { fetchCart } from "../store/cart";

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

  return (
    <div className="order-session">
      <h1>Your Cart</h1>
      <div className="order-session-title">
        <h2>Product</h2>
        <h2>Qty</h2>
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
        <p className="session-total">${total}</p>
      </strong>
      <Link to="/checkout">
        <Button>Checkout</Button>
      </Link>
    </div>
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
