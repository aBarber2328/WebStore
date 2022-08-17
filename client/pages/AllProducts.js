import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ProductNav from "../components/ProductNav";
import { fetchCart } from "../store/cart";

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    })();
  }, []);

  async function handleAddToCart(event) {
    const productId = event.target.name;

    // (();
  }
  return (
    <div>
      <ProductNav />
      <div className="displayAll">
        {products.map((product) => (
          <div className="singleItem" key={product.id}>
            <div>
              <div className="price">Price: ${product.price}</div>
              <div className="emotionImages">
                <Link to={`/products/${product.id}`}>
                  <div>{<img src={product.imageURL} />}</div>
                </Link>
              </div>
              <div className="fontSize">{product.name}</div>

              <div className="allProButtons">
                <div>
                  <button
                    // id={product.id}
                    name={product.id}
                    type="button"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                </div>
                <div>
                  <button>Special Offers</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const mapDispatch = (dispatch)=>{
  return {
    fetchCart: ()=>{
      dispatch(fetchCart());
    }
  }
}

export default connect(null, mapDispatch)(AllProducts);
