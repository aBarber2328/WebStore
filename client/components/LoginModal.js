import React, { useState } from "react";
import { Login } from "./AuthForm";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const LoginModal = () => {
  const [openLogin, setLogin] = useState(false);
  const handleLogin = () => setLogin(true);
  const handleClose = () => setLogin(false);

  return (
    <div>
      <IconButton
        className="landingButton1"
        size="large"
        color="inherit"
        onClick={handleLogin}
      >
        Login
      </IconButton>
      <Modal
        open={openLogin}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Login />
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
