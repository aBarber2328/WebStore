import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import { me } from "./store";
import SingleProduct from "./pages/SingleProduct";
import AllProducts from "./pages/AllProducts";
import OrderSession from "./pages/OrderSession";


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
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/products" component={AllProducts} />
          <Route path="/products/:productId" component={SingleProduct} />
          <Route path="/orderSession" component={OrderSession} />

          {/* {isLoggedIn ? (
            <Route path="/orderHistory" component={OrderHistory} />
          ) : (
            <>
              <Route path="/login" component={Login} />
            </>
          )} */}
        </Switch>
      </div>
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
export default withRouter(connect(mapState, mapDispatch)(Routes));
