import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    // <div>
    <form
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      // }}
      onSubmit={handleSubmit}
      name={name}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "0",
          }}
        >
          <label className="label">
            <input name="username" type="text" required />
            <span className="placeholder">Enter Username</span>
          </label>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "0",
          }}
        >
          <label className="label">
            <input name="password" type="password" required />
            <span className="placeholder">Enter Password</span>
          </label>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "0", }}>
        <button className="modal-button" type="submit">{displayName}</button>
      </div>
      {error && error.response && <div> {error.response.data} </div>}
    </form>
    // </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
