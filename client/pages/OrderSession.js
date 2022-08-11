import React, { useState, useEffect } from "react";
import axios from "axios";
import { data } from "flickity";
import OrderSessionProduct from "../components/OrderSessionProduct";

const OrderSession = (props) => {
  const [cart, setCart] = useState([]);


  useEffect(() => {
    (async () => {
      const token = window.localStorage.token;
      const { data } = await axios.get("/api/order-session", {
        headers: {
          authorization: token,
        },
      });
      setCart(data.products);

      // console.log(data.products);
    })();
  }, []);
console.log(cart);
  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 ?(''):(cart.map((product) => (
        <OrderSessionProduct key={product.id} product={product} cart={cart} setCart={setCart}/>
      )))}
    </div>
  );
};

export default OrderSession;
