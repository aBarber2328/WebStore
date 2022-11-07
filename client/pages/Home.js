import React from "react";
import { connect } from "react-redux";
import { fetchCart } from "../store/cart";
import SplineLanding from "../components/SplineLanding";
import SplineMobile from "../components/SplineMobile";
import SplineTab from "../components/SplineTab";

/**
 * COMPONENT
 */
export class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { username } = this.props;

    if(screen.width > 920)return(<SplineLanding username = {username}/>)
    if(screen.width > 428 && screen.width < 920)return(<SplineTab username = {username}/>)
    if(screen.width <= 428)return(<SplineMobile username = {username}/>)
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
