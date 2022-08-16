import React, { useState } from "react";
import axios from "axios";
import { Divider } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
      <div className="order-session-product">
        <div>
          <div className="product-title">{product.name}</div>
          <img src={product.imageURL} />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <ArrowDropUpIcon onClick={handleIncrement} />
            <div>{quantity}</div>
            <ArrowDropDownIcon onClick={handleDecrement} />
          </div>
        </div>
        <div style={{ display: "block" }}>
          <div>$ {product.price}</div>
          <button
            className="delete-button"
            onClick={() => removeProduct(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default OrderSessionProduct;
