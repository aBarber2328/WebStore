/* eslint-disable react/prop-types */
import React from "react";
import { Divider } from "@mui/material";
import { deleteProduct, editQuantity } from "../store/cart";
import { connect } from "react-redux";

const OrderSessionProduct = (props) => {
  const product = props.product;
  let quantity = product.quantity;

  const removeProduct = (productId) => {
    props.deleteItem(productId);
  };

  const handleDecrement = async (productId) => {
    if (quantity > 0) {
      quantity = quantity - 1;
      console.log(quantity);
      props.editQuantity(productId, quantity);
    }
  };

  const handleIncrement = async (productId) => {
    if (quantity < 100) {
      quantity = quantity + 1;
      props.editQuantity(productId, quantity);
    }
  };

  return (
    <>
      <div className="product-title">{product.name}</div>
      <div className="order-session-product">
        <img src={product.imageURL} />
        <button
          onClick={() => {
            handleDecrement(product.id);
          }}
        >
          -
        </button>
        <h2>{quantity}</h2>
        <button
          onClick={() => {
            handleIncrement(product.id);
          }}
        >
          +
        </button>
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
      dispatch(deleteProduct(id));
    },
    editQuantity: (productId, quantity) => {
      dispatch(editQuantity(productId, quantity));
    },
  };
};
const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapState, mapDispatch)(OrderSessionProduct);
