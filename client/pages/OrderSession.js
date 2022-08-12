import React, { useState, useEffect } from "react";
import axios from "axios";
import { data } from "flickity";
import OrderSessionProduct from "../components/OrderSessionProduct";
import { Link } from "react-router-dom";

const OrderSession = (props) => {
  const [cart, setCart] = useState([]);

  const updateOrderSession = async (event) => {
    event.preventDefault();
    const newCart = cart.map((item) => ({
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
    })();
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0
        ? ""
        : cart.map((product) => (
            <OrderSessionProduct
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}

      <button onClick={updateOrderSession}>
        <Link to="/checkout">Checkout</Link>
      </button>
    </div>
  );
};

export default OrderSession;
