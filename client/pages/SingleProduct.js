import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import EmotionNav from "../components/ProductNav";
// import Canvas3D from "../components/Canvas3D";
import Navbar from "../components/Navbar";

const SingleEmotion = (props) => {
  let params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/products/${params.productId}`);
      setProduct(data);
    })();
  }, []);

  return (
    !product.name || (
      <>
        <Navbar />
        <div>
          Single Emotion View
          <EmotionNav />
          <h1>{product.name}</h1>
          <div className="item">
            <div className="itemDetails">
              <div className="singleImg">
                <div className="text-9xl">{product.imageURL}</div>
                {/* <Canvas3D /> */}
              </div>
              <div className="description">
                <div>
                  <h2>Description:</h2> {product.description}
                </div>
              </div>
              <div>
                <span>Price:</span> ${product.price}
              </div>
              <div>
                <span>On Hand Quantity:</span> {product.stockQuantity}
              </div>
              <div>
                <Link to={`/products/${product.id}/edit`} />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default SingleEmotion;
