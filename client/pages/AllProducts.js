/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductNav from "../components/ProductNav";
import { fetchProducts } from "../store/products";
import { addProduct, setCart, fetchCart } from "../store/cart";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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
  const slideLeft = () => {
    const slide = document.getElementById(`${name}-slider`);
    slide.scrollLeft = slide.scrollLeft - 500;
  };

  const slideRight = () => {
    const slide = document.getElementById(`${name}-slider`);
    slide.scrollLeft = slide.scrollLeft + 500;
  };

  return (
    <>
      <div className="text-3xl font-bold uppercase mx-8 text-white">{name}</div>
      <div className="flex flex-nowrap items-center">
        {window.innerWidth < 600 ? (
          <></>
        ) : (
          <MdChevronLeft
            className="absolute bg-neutral-200 my-6 mx-4 rounded-xl h-28 z-50"
            size={40}
            onClick={slideLeft}
          />
        )}

        <div
          id={`${name}-slider`}
          className="flex flex-row overflow-x-auto overflow-y-hidden scroll whitespace-nowrap scroll-smooth mb-8 scrollbar-hide"
        >
          {products.map((product) => (
            <Product
              product={product}
              handleAddToCart={handleAddToCart}
              key={product.id}
            />
          ))}
        </div>
        {window.innerWidth < 600 ? (
          <></>
        ) : (
          <MdChevronRight
            className="absolute right-1.5 bg-neutral-200 my-6 mx-4 mb-16 rounded-xl h-28 z-50"
            size={40}
            onClick={slideRight}
          />
        )}
      </div>
    </>
  );
};

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="bg-white my-6 mx-6 py-4 px-4 rounded-xl h-96 hover:scale-110">
      <div className="text-2xl text-black font-medium text-center h-24 max-h-full whitespace-normal">
        {product.name}
      </div>

      <div>
        <Link to={`/products/${product.id}`}>
          <div className="flex w-48 justify-center my-4">
            <div className="text-9xl">{product.imageURL}</div>
          </div>
        </Link>
      </div>

      <div className="text-center text-2xl my-2">
        Price: ${product.price.toFixed(2)}
      </div>
      <div className="flex flex-wrap justify-center mt-2 bg-emerald-400 rounded-2xl">
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
