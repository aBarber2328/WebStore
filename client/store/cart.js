import axios from "axios";

const SET_CART = "SET_CART";
const DELETE_PRODUCT = "DELETE_PRODUCT";

const setCart = (cart) => ({
  type: SET_CART,
  cart,
});

const _deleteProduct = (product) =>(
  {
    type: DELETE_PRODUCT,
    product
  }
)

export const fetchCart = () => async (dispatch) => {

    const token = window.localStorage.token;
    const { data:cart } = await axios.get("/api/order-session", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setCart(cart));
  };

  export const deleteProduct = (productId, history) => async(dispatch) => {

      const token = window.localStorage.token;
      const { data: deleted } = await axios.delete(`/api/order-session/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(_deleteProduct(deleted));
      history.push("/");
  };


export default function (state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
      case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product.id);
    default:
      return state;
  }
}
