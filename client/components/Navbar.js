import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import NavCarousel from "./navCarousel";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
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
import cart, { clearCart } from "../store/cart";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = ({ handleClick, isLoggedIn, isAdmin, cart }) => {
  const [openLogin, setLogin] = useState(false);
  const [openSignup, setSignup] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const itemNum = cart.products;
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState([]);

  const isMenuOpen = Boolean(anchorEl);

  // console.log(itemNum);

  const handleLogin = () => {
    setLogin(true);
  };
  const handleSignup = () => {
    setSignup(true);
  };

  const handleProfileMenuOpen = (event) => {
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

  const handleSearch = (event) => {
    // setInput((event.target.value).toUpperCase());
    // products.filter(product =>)
  };

  //console.log(cart);

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
      <div>
        <NavCarousel />
      </div>

      {isLoggedIn ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ color: "#000022" }}>
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <Link to="/products">WEBSTORE</Link>
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={handleSearch}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton size="large" color="inherit">
                  <Link to="/">
                    <Home />
                  </Link>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={itemNum && itemNum.length} color="error">
                    <Link to="/order-session">
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
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Link to="/">
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
                  <Link to="/">
                    <LogOut />
                  </Link>
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
            // handleLogin={handleLogin}
            // handleSignup={handleSignup}
            // openLogin={openLogin}
            // setLogin={setLogin}
            // openSignup={openSignup}
            // setSignup={setSignup}
            handleMobileMenuClose={handleMobileMenuClose}
            itemNum={itemNum}
          />

          {renderMenu}
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <Link to="/products">WEBSTORE</Link>
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={handleSearch}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton size="large" color="inherit">
                  <Link to="/">
                    <Home />
                  </Link>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={itemNum && itemNum.length} color="error">
                    <Link to="/order-session">
                      <ShoppingCart />
                    </Link>
                  </Badge>
                </IconButton>
                <IconButton size="large" color="inherit" onClick={handleLogin}>
                  <LogIn />
                  <LoginModal open={openLogin} setOpen={setLogin} />
                </IconButton>
                <IconButton size="large" color="inherit" onClick={handleSignup}>
                  <FiEdit3 />
                  <SignupModal open={openSignup} setOpen={setSignup} />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
          <RenderMobileMenu />
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
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(clearCart())
      dispatch(logout());
    },

  };
};

export default connect(mapState, mapDispatch)(Navbar);
