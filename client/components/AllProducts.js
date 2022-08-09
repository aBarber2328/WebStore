import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import EmotionNav from "./EmotionNav";

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    })();
  }, []);

  async function handleAddToCart(event) {
    console.log("click");
  }
  return (
    <div>
      <EmotionNav />
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
                    id={product.id}
                    name={product.name}
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

export default AllProducts;