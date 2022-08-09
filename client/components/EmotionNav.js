import React from "react";
import { Link } from "react-router-dom";


export default function EmotionNav(){
  return(
    <div>
      <div className="singleHeader">
        <Link style={{color: "black"}} to="/emotions">WAXDRIP</Link>
        <div className="cartLinks">
          <Link to="/products">Back to All Items</Link>
          <Link to="/products">Add Item to Cart</Link>
          <Link to="/products">Edit My Cart</Link>
        </div>
        <div>
          {/* <Link to="/emotions">
            View My Cart
          </Link> */}
        </div>
      </div>
    </div>
  )
}
