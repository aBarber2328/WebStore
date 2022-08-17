import React, { useState } from "react";
import axios from "axios";
import { Divider } from "@mui/material";
import { deleteProduct } from "../store/cart";
import { connect } from "react-redux";

const OrderSessionProduct = (props, { setCart, cartRef }) => {

  const product = props.product;
  const quantity = product.productOrderSessions.quantity;
  // const [quantity, setQuantity] = useState(
  //   product.productOrderSessions.quantity
  // );
console.log(props);

const removeProduct = (productId) =>{
    props.deleteItem(productId)
}

  //async function removeProduct(productId) {


    // setCart((cart) => {
    //   const newCart = cart.filter((item) => item.id !== productId);
    //   cartRef.current = newCart;
    //   return newCart;
    // });
  //}

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

const mapDispatch = (dispatch) => {
  return {
    deleteItem: (id) => {
      dispatch(deleteProduct(id, history));
    },
  };
};
const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapState, mapDispatch)(OrderSessionProduct);
