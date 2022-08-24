/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Divider } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { deleteProduct, editQuantity } from "../store/cart";
import { connect } from "react-redux";

const OrderSessionProduct = (props) => {
  const product = props.product;
  let [quantity, setQuantity] = useState(product.quantity);

  const removeProduct = (productId) => {
    props.deleteItem(productId);
  };

  const handleDecrement = async (productId) => {
    if (quantity > 0) {
      props.editQuantity(productId, quantity - 1, props.cart.id);
      setQuantity((q) => q - 1);
    }
  };

  const handleIncrement = async (productId) => {
    if (quantity < 100) {
      props.editQuantity(productId, quantity + 1, props.cart.id);
      setQuantity((q) => q + 1);
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
            <ArrowDropUpIcon onClick={() => handleIncrement(product.id)} />
            <div>{quantity}</div>
            <ArrowDropDownIcon onClick={() => handleDecrement(product.id)} />
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

const mapDispatch = (dispatch) => {
  return {
    deleteItem: (id) => {
      dispatch(deleteProduct(id));
    },
    editQuantity: (productId, quantity, orderSessionId) => {
      dispatch(editQuantity(productId, quantity, orderSessionId));
    },
  };
};

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapState, mapDispatch)(OrderSessionProduct);
