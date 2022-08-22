import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Home from "@mui/icons-material/Home";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import LogOut from "@mui/icons-material/Logout";
import LogIn from "@mui/icons-material/Login";
//import SignUp from "@mui/icons-material/"

import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { FiEdit3 } from "react-icons/fi";

export const mobileMenuId = "primary-search-account-menu-mobile";

const RenderMobileMenu = ({
  mobileMoreAnchorEl,
  isLoggedIn,
  handleProfileMenuOpen,
  handleClick,
  // handleLogin,
  // handleSignup,
  // openLogin,
  // setLogin,
  // openSignup,
  // setSignup,
  handleMobileMenuClose,
  itemNum,
}) => {
  const [openLogin, setLogin] = useState(false);
  const [openSignup, setSignup] = useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleLogin = () => {
    setLogin(true);
  };
  const handleSignup = () => {
    setSignup(true);
  };

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Link to="/">
            <Home />
            Home
          </Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={itemNum && itemNum.length} color="error">
            <Link to="/order-session">
              <ShoppingCart />
              Cart
            </Link>
          </Badge>
        </IconButton>
      </MenuItem>
      {isLoggedIn ? (
        <MenuItem >
          {/* <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
            Profile

          </IconButton> */}

          <IconButton
            size="large"
            color="inherit"
            onClick={() => {
              handleClick();
              setLogin(false);
              setSignup(false);
              handleMobileMenuClose();
            }}
          >
            <Link to="/">
              <LogOut />
              LogOut
            </Link>
          </IconButton>
        </MenuItem>
      ) : (
        <MenuItem>
          <IconButton size="large" color="inherit" onClick={handleLogin}>
            <LogIn />
            <LoginModal open={openLogin} setOpen={setLogin} />
          </IconButton>
          <p>LogIn</p>
          <IconButton size="large" color="inherit" onClick={handleSignup}>
            <FiEdit3 />
            <SignupModal open={openSignup} setOpen={setSignup} />
          </IconButton>
          <p>SignUp</p>
        </MenuItem>
      )}
    </Menu>
  );
};

export default RenderMobileMenu;
