/* eslint-disable no-case-declarations */
import axios from "axios";

const SET_CART = "SET_CART";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const EDIT_QUANTITY = "EDIT_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

export const setCart = (cart) => ({
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

const _clearCart = () => ({
  type: CLEAR_CART,
});

export const fetchCart = () => async (dispatch) => {
  const token = window.localStorage.getItem("token");

  if (token) {
    // Check if cart exist in database
    const { data: cart } = await axios.get("/api/order-session", {
      headers: {
        authorization: token,
      },
    });

    dispatch(setCart(cart));
  } else {
    const cart = window.localStorage.getItem("cart");

    if (cart) {
      dispatch(setCart(JSON.parse(cart)));
    } else {
      dispatch(setCart({}));
    }
  }
};

export const addProduct = (product) => async (dispatch) => {
  const token = window.localStorage.getItem("token");

  if (token) {
    (async () => {
      await axios.post("/api/order-session", {
        token: window.localStorage.token,
        productId: product.id,
        quantity: product.quantity || 1,
      });
    })();

    dispatch(_addProduct(product));
  } else {
    let localCart = JSON.parse(window.localStorage.getItem("cart"));
    let foundProduct = null;

    for (let i = 0; i < localCart.products.length; i++) {
      if (localCart.products[i].id === product.id) {
        localCart.products[i].quantity++;
        foundProduct = localCart.products[i];
        break;
      }
    }

    if (!foundProduct) {
      localCart.products.push({
        quantity: 1,
        id: product.id,
        imageURL: product.imageURL,
        name: product.name,
        price: product.price,
      });
    }
    window.localStorage.setItem("cart", JSON.stringify(localCart));

    dispatch(setCart(localCart));
  }
};

export const editQuantity =
  (productId, quantity, orderSessionId) => async (dispatch) => {
    const token = window.localStorage.getItem("token");

    if (token) {
      (async () => {
        await axios.put("/api/order-session", {
          token: window.localStorage.token,
          cart: [{ productId, quantity, orderSessionId }],
        });
      })();
      dispatch(_editQuantity(productId, quantity));
    } else {
      const localCart = JSON.parse(window.localStorage.getItem("cart"));
      const products = localCart.products;

      for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
          products[i].quantity = quantity;
          break;
        }
      }
      window.localStorage.setItem("cart", JSON.stringify(localCart));

      dispatch(setCart(localCart));
    }
  };

export const clearCart = () => async (dispatch) => {
  window.localStorage.removeItem("cart");
  console.log("Cleared", window.localStorage.cart);
  dispatch(_clearCart());
};

export const deleteProduct = (productId) => async (dispatch) => {
  const token = window.localStorage.token;
  if (token) {
    const { data: deleted } = await axios.delete(
      `/api/order-session/${productId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch(_deleteProduct(deleted));
  } else {
    const localCart = JSON.parse(window.localStorage.getItem("cart"));
    localCart.products = localCart.products.filter(
      (product) => product.id !== productId
    );

    window.localStorage.setItem("cart", JSON.stringify(localCart));

    dispatch(_deleteProduct({ id: productId }));
  }
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
