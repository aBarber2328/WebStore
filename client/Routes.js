import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "./pages/Home";
import { me } from "./store";
import SingleProduct from "./pages/SingleProduct";
import AllProducts from "./pages/AllProducts";
import OrderSession from "./pages/OrderSession";
import Checkout from "./pages/Checkout";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Switch>
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/products/:productId" element={<SingleProduct />} />
        <Route path="/order-session" element={<OrderSession />} />
        <Route exact path="/checkout" element={<Checkout />} />
        {/* {isLoggedIn ? (
            <Route path="/orderHistory" component={OrderHistory} />
          ) : (
            <>
              <Route path="/login" component={Login} />
            </>
          )} */}
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(mapState, mapDispatch)(Routes);
