/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Home from "@mui/icons-material/Home";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogOut from "@mui/icons-material/Logout";
import LogIn from "@mui/icons-material/Login";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import RenderMobileMenu from "./MobileNav";
import { mobileMenuId } from "./MobileNav";
import { FiEdit3 } from "react-icons/fi";
import { clearCart, fetchCart } from "../store/cart";
import SearchBar from "./SearchBar";

const Navbar = ({
  handleClick,
  isLoggedIn,
  isAdmin,
  cart,
  products,
  fetchCart,
}) => {
  const [openLogin, setLogin] = useState(false);
  const [openSignup, setSignup] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const cartProducts = cart.products;

  const isMenuOpen = Boolean(anchorEl);

  const handleLogin = () => {
    setLogin(true);
  };
  const handleSignup = () => {
    setSignup(true);
  };

  const handleCart = () => {
    window.localStorage.setItem("cart", '{"products":[]}');
  };

  const handleProfileMenuOpen = (event) => {
    event.persist();
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    event.persist();
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div>
      {isLoggedIn ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ color: "#000022" }}>
            <Toolbar className="bg-neutral-300">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <Link className="app-bar-links" to="/products">
                  WEBSTORE
                </Link>
              </Typography>
              <SearchBar allProducts={products} />
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton size="large" color="inherit">
                  <Link className="app-bar-links" to="/">
                    <Home />
                  </Link>
                </IconButton>
                <IconButton
                  className="app-bar-links"
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge
                    badgeContent={cartProducts && cartProducts.length}
                    color="error"
                  >
                    <Link className="app-bar-links" to="/order-session">
                      <ShoppingCart />
                    </Link>
                  </Badge>
                </IconButton>

                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  // onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Link className="app-bar-links" to="/">
                    <AccountCircle />
                  </Link>
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => {
                    handleClick();
                    setLogin(false);
                    setSignup(false);
                  }}
                >
                  <Link className="app-bar-links" to="/">
                    <LogOut />
                  </Link>
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  // onClick={()=>{handleCart()}}
                >
                  <Badge
                    badgeContent={cartProducts && cartProducts.length}
                    color="error"
                  >
                    <Link className="app-bar-links" to="/order-session">
                      <ShoppingCart />
                    </Link>
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <RenderMobileMenu
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            isLoggedIn={isLoggedIn}
            handleProfileMenuOpen={handleProfileMenuOpen}
            handleClick={handleClick}
            handleMobileMenuClose={handleMobileMenuClose}
            itemNum={cartProducts}
          />

          {/* {renderMenu} */}
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            className="app-bar"
            position="static"
            style={{ color: "#000022" }}
          >
            <Toolbar className="bg-neutral-300">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <Link className="app-bar-links" to="/products">WEBSTORE</Link>
              </Typography>
              <SearchBar allProducts={products} />
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton size="large" color="inherit">
                  <Link className="app-bar-links" to="/">
                    <Home />
                  </Link>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge
                    badgeContent={cartProducts && cartProducts.length}
                    color="error"
                  >
                    <Link className="app-bar-links" to="/order-session">
                      <ShoppingCart />
                    </Link>
                  </Badge>
                </IconButton>
                {/* <IconButton size="large" color="inherit" onClick={handleLogin}>
                  <LogIn className="app-bar-links" /> */}
                  <LoginModal className="landingButton1"/>
                {/* </IconButton> */}
                {/* <IconButton size="large" color="inherit" onClick={handleSignup}>
                  <FiEdit3 className="app-bar-links" /> */}
                  <SignupModal className="landingButton1"/>
                {/* </IconButton> */}
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge
                    badgeContent={cartProducts && cartProducts.length}
                    color="error"
                  >
                    <Link className="app-bar-links" to="/order-session">
                      <ShoppingCart />
                    </Link>
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <RenderMobileMenu
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            isLoggedIn={isLoggedIn}
            handleClick={handleClick}
            handleMobileMenuClose={handleMobileMenuClose}
            itemNum={cartProducts}
          />
          {renderMenu}
        </Box>
      )}
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
    cart: state.cart,
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(clearCart());
      dispatch(logout());
    },
    fetchCart: () => {
      dispatch(fetchCart());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
