import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderSessionProduct = ({product, cart, setCart})=>{
  const [ quantity, setQuantity ] = useState(product.productOrderSessions.quantity);

  async function removeProduct(productId) {
    const token = window.localStorage.token;

    await axios.delete(`/api/cart/${productId}`,{
      headers: {
        authorization: token,
      },
    })

    setCart((cart)=>{
     const newCart = cart.filter(item => item.id !== productId);
     return newCart;
    })

  }

  const handleDecrement = ()=>{
    if(quantity > 0){
      setQuantity(quantity-1);
    }
  }
  const handleIncrement = ()=>{
      setQuantity(quantity+1);
  }

  return (
    <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img src={product.imageURL} />
          <button onClick={handleDecrement}>-</button>
          <h2>
            {quantity}
          </h2>
          <button onClick={handleIncrement}>+</button>
          <h2>Price{product.price}</h2>
          <button
            className="delete-button"
            onClick={() =>
              removeProduct(product.id)
            }
          >
            Remove Emotion
          </button>
        </div>
  )
}

export default OrderSessionProduct;
