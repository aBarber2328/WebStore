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

  // async function handleAddToCart(event) {
  //   const emotionId = event.target.id;

  // }
  return (
    <div>
      ALL PRODUCTS
      <EmotionNav />
      <div className="displayAll">
        {products.map((product) => (
          <div className="singleItem" key={product.id}>
            <div>
              <div className="price">Price: ${product.price}</div>
              <div className="productImages">
                <Link to={`/products/${product.id}`}>
                  <div>{<img src={product.imageURL} />}</div>
                </Link>
              </div>
              {/* <div className="fontSize">{emotion.name}</div> */}

              {/* <div className="allProButtons">
                <div>
                  <button
                    id={emotion.id}
                    name={emotion.name}
                    type="button"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                </div>
                <div>
                  <button>Special Offers</button>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     state: state,
//   };
// };

// export default connect(mapStateToProps)(Allproducts);
export default AllProducts;
