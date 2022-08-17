import React from "react";
import { connect } from "react-redux";
import cart, { fetchCart } from "../store/cart";



/**
 * COMPONENT
 */
export class Home extends React.Component {
  constructor() {
    super();
  }

  // componentDidMount(){
  //   this.props.fetchCart();
  // }

  render() {
    const { username } = this.props;

    return (
      <div className="landing">

        <h3>Welcome, {username}</h3>
        <div>

        </div>
      </div>
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
}
};

export default connect(mapState, mapDispatch)(Home);
