import React, {useState} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { Login, Signup } from "./AuthForm";
import AllEmotions from "./AllProducts";
import NavCarousel from "./navCarousel";
import {
  FiLogOut,
  FiHome,
  FiShoppingCart,
  FiEdit3,
  FiUserX,
} from "react-icons/fi";
import { RiAdminFill } from "react-icons/ri";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => {

  const {openMenu, setOpen} = useState(false)

  const handleToggle = (event) =>{
    //document.getElementsByClassName("navBarMenu").className.toggle("active");

    // console.log(event);
  }

  const handleLogin = (event) => {
    const modal = document.getElementById("loginModal");

    const span = document.getElementsByClassName("close")[0];

    if (event) {
      modal.style.display = "block";
    }

    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };

  const closeSpan = (event) => {
    const modal = document.getElementById("signupModal");

    if (event) {
      modal.style.display = "none";
    }
  };

  const handleSignup = (event) => {
    const modal = document.getElementById("signupModal");

    if (event) {
      modal.style.display = "block";
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };

  return (
    <div>
      <div>
        <NavCarousel />
      </div>

      <nav>
        {isLoggedIn ? (
          <div className="navBar">
            <h1>
              <Link
                style={{
                  color: "black",
                }}
                to="/home"
              >
                Web Store
              </Link>
            </h1>
            <div className="navToggle" id="mobileMenu" onClick={handleToggle}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>


            <div className="navBarMenu" >
              {/* The navbar will show these links after you log in */}
              <Link to="/home">
                <FiHome />
              </Link>
              {isAdmin ? (
                <Link to="/emotions">
                  <RiAdminFill />
                </Link>
              ) : (
                ""
              )}
              <Link to="/users/cart">
                <FiShoppingCart />
              </Link>
              <a href="" onClick={handleClick}>
                <FiLogOut />
              </a>
            </div>
            </div>
          </div>
        ) : (
          <div className="navBar">
            <h1>
              <Link style={{ color: "black" }} to="/home">
                Web Store
              </Link>
            </h1>
            {/* The navbar will show these links before you log in */}

            <div className="navBarMenu">
              <Link to="/home">
                <FiHome />
              </Link>
              <div>
                <button id="loginSignup" onClick={handleLogin}>
                  <FiUserX />
                </button>
                <div id="loginModal" className="modal">
                  <div className="modal-content">
                    <span className="close">&times;</span>
                    <Login />
                  </div>
                </div>
              </div>
              <div>
                <button id="loginSignup" onClick={handleSignup}>
                  <FiEdit3 />
                </button>
                <div id="signupModal" className="modal">
                  <div className="modal-content">
                    <span onClick={closeSpan} className="close">
                      &times;
                    </span>
                    <Signup />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* {isAdmin ? (
          <span>
            <p> You are an Admin, can edit products </p>
          </span>
        ) : (
          <span>
            <p> You are NOT an Admin </p>
          </span>
        )} */}
      </nav>
      <hr />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isAdmin: state.auth.type === "siteAdmin",
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
