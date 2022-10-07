import axios from "axios";
import { bindActionCreators } from "redux";

const ALL_PRODUCTS = "ALL_PRODUCTS";
const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

const _allProducts = (products) => ({
  type: ALL_PRODUCTS,
  products,
});

const _searchProducts = (product, products) => ({
  type: SEARCH_PRODUCTS,
  product,
  products
});

export const fetchProducts = () => async (dispatch) => {
  const { data: products } = await axios.get("/api/products");
  return dispatch(_allProducts(products));
};

export const searchProducts = (product) => async (dispatch) => {
  //console.log(product);
  const { data: products } = await axios.get("/api/products");
  //console.log(products);
  dispatch(_searchProducts(product, products));
};

export default function (state = {}, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return action.products;
    case SEARCH_PRODUCTS:
      return action.products.filter((product) => product.name.includes(action.product)
      )
    default:
      return state;
  }
}
