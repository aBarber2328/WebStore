/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductNav from "../components/ProductNav";
import { fetchProducts } from "../store/products";
import { addProduct, setCart, fetchCart } from "../store/cart";

const AllProducts = (props) => {
  const products = props.products;
  useEffect(() => {
    props.getProducts();
    // (async () => {
    //   const { data } = await axios.get("/api/products");
    //   setProducts(data);
    // })();

    if (!window.localStorage.getItem("cart")) {
      window.localStorage.setItem("cart", '{"products":[]}');
    }
    props.fetchCart();
  }, []);
  async function handleAddToCart(event, product) {
    props.addProduct(product);
  }

  return (
    <div>
      <ProductNav />
      <div className="displayAll">
        {products.length === undefined
          ? ""
          : products.map((product) => (
              <div className="singleItem" key={product.id}>
                <div>
                  <div className="price">Price: ${product.price}</div>
                  <div className="emotionImages">
                    <Link to={`/products/${product.id}`}>
                      <div>{<img src={product.imageURL} />}</div>
                    </Link>
                  </div>
                  <div className="fontSize">{(product.name)}</div>

                  <div className="allProButtons">
                    <div>
                      <button
                        name={product.id}
                        type="button"
                        onClick={(event) => handleAddToCart(event, product)}
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

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(addProduct(product));
    },
    getProducts: () => {
      dispatch(fetchProducts());
    },
    setCart: (cart) => {
      dispatch(setCart(cart));
    },
    fetchCart: () => {
      dispatch(fetchCart());
    },
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
