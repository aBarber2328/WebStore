import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import OrderSessionProduct from "../components/OrderSessionProduct";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cart, { fetchCart } from "../store/cart";

const OrderSession = (props) => {
  const myCart = props.cart.products;
  const cartRef = useRef([]);
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
    // (async () => {
    //   const token = window.localStorage.token;
    //   const { data } = await axios.get("/api/order-session", {
    //     headers: {
    //       authorization: token,
    //     },
    //   });
    //   setCart(data.products);
    //   cartRef.current = data.products;
    // })();
    //props.fetchCart();

    //return updateOrderSession;
  }, []);

//console.log(myCart)
  // useEffect(() => {
  //   setTotal(calculateTotal(cart));
  // }, [cart]);

  return (
    <div className="order-session">
      <h1>Your Cart</h1>
      {myCart === undefined
        ? ""
        : myCart.map((product) => (
            <OrderSessionProduct
              key={product.id}
              product={product}
              cart={myCart}
              //setCart={setCart}
              cartRef={cartRef}
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

// const calculateTotal = (cart) => {
//   return cart.reduce(
//     (total, item) => total + item.price * item.productOrderSessions.quantity,
//     0
//   );
// };

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
