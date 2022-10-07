import React from "react";
import { connect } from "react-redux";
import { fetchCart } from "../store/cart";
import SplineLanding from "../components/SplineLanding";

/**
 * COMPONENT
 */
export class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { username } = this.props;

    return (
        <SplineLanding username = {username}/>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    userId: state.auth.id,
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    //loadUserCart: (userId) => dispatch(fetchUserCart(userId)),
    fetchCart: () => {
      dispatch(fetchCart());
    },
  };
};

export default connect(mapState, mapDispatch)(Home);
