/* eslint-disable react/prop-types */
import React, {useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import { addProduct, setCart, fetchCart } from "../store/cart";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Navbar from "../components/Navbar";

const AllProducts = (props) => {
  // Get all products from props
  const products = props.products;

  // Use hooks to keep track of different emoji types
  const [popular, setPopular] = useState([]);
  const [onsale, setOnsale] = useState([]);
  const [random, setRandom] = useState([]);
  const [expensive, setExpensive] = useState([]);
  const [free, setFree] = useState([]);

  // Component did moun -> fetch the products and cart info
  useEffect(() => {
    props.getProducts();

    if (!window.localStorage.getItem("cart")) {
      window.localStorage.setItem("cart", '{"products":[]}');
    }
    props.fetchCart();
  }, []);

  // Every time the products from props change, do following
  useEffect(() => {
    if (products.length !== undefined) {
      // Reset the product types to empty array
      setFree([]);
      setPopular([]);
      setOnsale([]);
      setRandom([]);
      setExpensive([]);

      // Filter the product base on price and randomness
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
  }, [products]);


  useEffect(() => {
    props.getProducts();

    if (!window.localStorage.getItem("cart")) {
      window.localStorage.setItem("cart", '{"products":[]}');
    }
    props.fetchCart();
  }, []);

  // Add to cart funtion
  const handleAddToCart = async (event, product) => {
    props.addProduct(product);
  };

  // Make sure there are products before rendering
  if (products.length === undefined) {
    return "";
  }

  // If there are products -> render below
  return (
    <>
      <Navbar />

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
  // , compareProducts
// Component for each type/row in the all products view
  // slide left function
  const slideLeft = () => {
    const slide = document.getElementById(`${name}-slider`);
    slide.scrollLeft = slide.scrollLeft - 1000;
  };

  // slide right function
  const slideRight = () => {
    const slide = document.getElementById(`${name}-slider`);
    slide.scrollLeft = slide.scrollLeft + 1000;
  };

  return (
    <>
      <div className="text-3xl font-bold uppercase mx-8 text-white my-2 font-sans">
        {name}
      </div>
      <div className="flex flex-nowrap items-center">
        {
          // If the window width is more than 600, render the sliding button, else don't render
          window.innerWidth < 600 ? (
            <></>
          ) : (
            <MdChevronLeft
              className="absolute bg-amber-500 my-6 mx-4 rounded-xl h-28 z-50"
              size={40}
              onClick={slideLeft}
            />
          )
        }

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
        {
          // If the window width is more than 600, render the sliding button, else don't render
          window.innerWidth < 600 ? (
            <></>
          ) : (
            <MdChevronRight
              className="absolute right-1.5 bg-amber-500 my-6 mx-4 mb-16 rounded-xl h-28 z-50"
              size={40}
              onClick={slideRight}
            />
          )
        }
      </div>
    </>
  );
};

// Component for each product in the all product view
const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="bg-slate-200 my-6 mx-6 py-4 px-4 rounded-xl h-72 md:hover:scale-110">
      <div className="text-lg text-black font-medium text-center h-16 max-h-full whitespace-normal italic">
        {product.name}
      </div>

      <div>
        <Link to={`/products/${product.id}`}>
          <div className="flex w-40 justify-center my-4">
            <div className="text-6xl">{product.imageURL}</div>
          </div>
        </Link>
      </div>

      <div className="text-center text-xl my-2">
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
