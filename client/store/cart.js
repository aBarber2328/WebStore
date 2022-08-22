/* eslint-disable no-case-declarations */
import axios from "axios";

const SET_CART = "SET_CART";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const EDIT_QUANTITY = "EDIT_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

const setCart = (cart) => ({
  type: SET_CART,
  cart,
});

const _deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product,
});

const _addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

const _editQuantity = (productId, quantity) => ({
  type: EDIT_QUANTITY,
  productId,
  quantity,
});

const _clearCart = ()=>({
  type: CLEAR_CART,
})

export const fetchCart = () => async (dispatch) => {
  const token = window.localStorage.token;
  const { data: cart } = await axios.get("/api/order-session", {
    headers: {
      authorization: token,
    },
  });
  return dispatch(setCart(cart));
};

export const addProduct = (product) => async (dispatch) => {
  (async () => {
    await axios.post("/api/order-session", {
      token: window.localStorage.token,
      productId: product.id,
    });
  })();
  dispatch(_addProduct(product));
};

export const editQuantity =
  (productId, quantity, orderSessionId) => async (dispatch) => {
    (async () => {
      await axios.put("/api/order-session", {
        token: window.localStorage.token,
        cart: [{ productId, quantity, orderSessionId }],
      });
    })();
    dispatch(_editQuantity(productId, quantity));
  };

  export const clearCart = ()=> async (dispatch)=>{
    dispatch(_clearCart());
  }

export const deleteProduct = (productId) => async (dispatch) => {
  const token = window.localStorage.token;
  const { data: deleted } = await axios.delete(
    `/api/order-session/${productId}`,
    {
      headers: {
        authorization: token,
      },
    }
  );
  dispatch(_deleteProduct(deleted));
};

export default function (state = {}, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.product.id
        ),
      };
    case ADD_PRODUCT:
      let isNewProduct = true;
      let newProducts = state.products.map((product) => {
        if (product.id === action.product.id) {
          isNewProduct = false;
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      if (isNewProduct) {
        newProducts = [...state.products, { ...action.product, quantity: 1 }];
      }
      return { ...state, products: newProducts };
    case EDIT_QUANTITY:
      let products = state.products.map((product) => {
        if (product.id === action.productId) {
          return { ...product, quantity: action.quantity };
        }
        return product;
      });
      return { ...state, products };
      case CLEAR_CART:
        return {};
    default:
      return state;
  }
}
