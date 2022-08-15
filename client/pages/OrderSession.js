import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import OrderSessionProduct from "../components/OrderSessionProduct";
import { Link } from "react-router-dom";

const OrderSession = () => {
  const [cart, setCart] = useState([]);
  const cartRef = useRef([]);
  const updateOrderSession = async () => {
    const newCart = cartRef.current.map((item) => ({
      quantity: item.productOrderSessions.quantity,
      orderSessionId: item.productOrderSessions.orderSessionId,
      productId: item.productOrderSessions.productId,
    }));

    await axios.put("/api/order-session/", {
      token: window.localStorage.token,
      cart: newCart,
    });
  };

  useEffect(() => {
    (async () => {
      const token = window.localStorage.token;
      const { data } = await axios.get("/api/order-session", {
        headers: {
          authorization: token,
        },
      });
      setCart(data.products);
      cartRef.current = data.products;
    })();

    return updateOrderSession;
  }, []);

  return (
    <div className="order-session">
      <h1>Your Cart</h1>
      {cart.length === 0
        ? ""
        : cart.map((product) => (
            <OrderSessionProduct
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
              cartRef={cartRef}
            />
          ))}

      <button onClick={updateOrderSession}>
        <Link to="/checkout">Checkout</Link>
      </button>
    </div>
  );
};

export default OrderSession;
