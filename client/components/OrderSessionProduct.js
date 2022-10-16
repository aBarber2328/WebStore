/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Divider } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { deleteProduct, editQuantity } from "../store/cart";
import { connect } from "react-redux";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";

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
      <div className="my-4 mx-3 flex justify-between">
        <div>
          <div className="text-6xl">{product.imageURL}</div>
        </div>
        <div className="flex scale-150 text-white h-16 w-24 text-center">
          <AiFillMinusCircle
            className="self-center w-10"
            onClick={() => handleDecrement(product.id)}
          />
          <div className="mx-1 w-8 text-xl self-center text-center">
            {quantity}
          </div>
          <IoIosAddCircle
            className="self-center w-10"
            onClick={() => handleIncrement(product.id)}
          />
        </div>
        <div className="flex flex-col text-center">
          <div className="text-white text-2xl grow flex flex-nowrap justify-around">
            <span>$</span>
            <span>{product.price.toFixed(2)}</span>
          </div>
          <button
            className="text-white text-xl bg-red-500 rounded-lg px-1"
            onClick={() => removeProduct(product.id)}
          >
            Remove
          </button>
        </div>
        <div className="hidden lg:inline text-white text-2xl w-32 flex-nowrap justify-around">
          <span>= $ </span>
          <span>{(quantity * product.price).toFixed(2)}</span>
        </div>
      </div>
      <Divider className="bg-white" />
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
