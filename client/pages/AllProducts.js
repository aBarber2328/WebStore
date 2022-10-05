/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductNav from "../components/ProductNav";
import { fetchProducts } from "../store/products";
import { addProduct, setCart, fetchCart } from "../store/cart";

const AllProducts = (props) => {
  const products = props.products;
  const [popular, setPopular] = useState([]);
  const [onsale, setOnsale] = useState([]);
  const [random, setRandom] = useState([]);
  const [expensive, setExpensive] = useState([]);
  const [free, setFree] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    props.getProducts();

    if (!window.localStorage.getItem("cart")) {
      window.localStorage.setItem("cart", '{"products":[]}');
    }
    props.fetchCart();
  }, []);

  async function handleAddToCart(event, product) {
    props.addProduct(product);
  }

  if (products.length === undefined) {
    return "";
  }

  if (!load) {
    setLoad(true);
    products.forEach((product) => {
      const randomNum = Math.floor(Math.random() * 10);
      if (product.price >= 80) {
        setExpensive((arr) => [...arr, product]);
      } else if (product.price === 0) {
        setFree((arr) => [...arr, product]);
      } else if (product.price <= 20) {
        setOnsale((arr) => [...arr, product]);
      } else if (randomNum >= 8) {
        setRandom((arr) => [...arr, product]);
      } else {
        setPopular((arr) => [...arr, product]);
      }
    });
  }

  if (!load) {
    return "";
  }

  return (
    <>
      <ProductNav />
      <ProductType
        products={free}
        name="free"
        handleAddToCart={handleAddToCart}
      />

      <ProductType
        products={onsale}
        name="onsale"
        handleAddToCart={handleAddToCart}
      />

      <ProductType
        products={expensive}
        name="High Quality"
        handleAddToCart={handleAddToCart}
      />
      <ProductType
        products={random}
        name="random"
        handleAddToCart={handleAddToCart}
      />
      <ProductType
        products={popular}
        name="popular"
        handleAddToCart={handleAddToCart}
      />
    </>
  );
};

const ProductType = ({ products, name, handleAddToCart }) => {
  return (
    <>
      <div className="text-3xl font-bold uppercase mx-8 text-white">{name}</div>
      <div className="flex flex-row overflow-x-auto overflow-y-hidden mb-8 touch-auto">
        {products.map((product) => (
          <Product
            product={product}
            handleAddToCart={handleAddToCart}
            key={product.id}
          />
        ))}
      </div>
    </>
  );
};

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="bg-white my-6 mx-6 py-4 px-4 rounded-xl h-96">
      <div className="text-xl text-black font-medium text-center h-24 max-h-full">
        {product.name}
      </div>

      <div>
        <Link to={`/products/${product.id}`}>
          <div className="flex justify-center my-4">
            <div className="text-9xl">{product.imageURL}</div>
          </div>
        </Link>
      </div>

      <div className="text-center text-2xl my-2">
        Price: ${product.price.toFixed(2)}
      </div>
      <div className="flex flex-wrap justify-center mt-2">
        <button
          className="text-2xl"
          name={product.id}
          type="button"
          onClick={(event) => {
            handleAddToCart(event, product);
          }}
        >
          Add To Cart
        </button>
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
