import React from "react";
import { connect } from "react-redux";



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
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadUserCart: (userId) => dispatch(fetchUserCart(userId)),
  };
};

export default connect(mapState, mapDispatch)(Home);
