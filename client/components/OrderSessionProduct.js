import React, { useState } from "react";
import axios from "axios";
import { Divider } from "@mui/material";

const OrderSessionProduct = ({ product, setCart, cartRef }) => {
  const [quantity, setQuantity] = useState(
    product.productOrderSessions.quantity
  );

  async function removeProduct(productId) {
    const token = window.localStorage.token;

    await axios.delete(`/api/order-session/${productId}`, {
      headers: {
        authorization: token,
      },
    });

    setCart((cart) => {
      const newCart = cart.filter((item) => item.id !== productId);
      cartRef.current = newCart;
      return newCart;
    });
  }

  const handleDecrement = async () => {
    if (quantity > 0) {
      setQuantity((quantity) => quantity - 1);
      setCart((cart) => {
        const newCart = cart.map((item) => {
          if (item.id === product.id) item.productOrderSessions.quantity--;
          return item;
        });
        cartRef.current = newCart;
        return newCart;
      });
    }
  };

  const handleIncrement = async () => {
    if (quantity < 100) {
      setQuantity((quantity) => quantity + 1);
      setCart((cart) => {
        const newCart = cart.map((item) => {
          if (item.id === product.id) item.productOrderSessions.quantity++;
          return item;
        });
        cartRef.current = newCart;
        return newCart;
      });
    }
  };

  return (
    <>
      <div className="product-title">{product.name}</div>
      <div className="order-session-product">
        <img src={product.imageURL} />
        <button onClick={handleDecrement}>-</button>
        <h2>{quantity}</h2>
        <button onClick={handleIncrement}>+</button>
        <h2>${product.price}</h2>
        <button
          className="delete-button"
          onClick={() => removeProduct(product.id)}
        >
          Remove
        </button>
      </div>
      <Divider />
    </>
  );
};

export default OrderSessionProduct;
