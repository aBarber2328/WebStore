import React, { useState } from "react";
import { Signup } from "./AuthForm";

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

const SignupModal = () => {
  const [openSignup, setSignup] = useState(false);
  const handleSignup = () => setSignup(true);
  const handleClose = () => setSignup(false);

  return (
    <div>
      <IconButton
        className="landingButton1"
        size="large"
        color="inherit"
        onClick={handleSignup}
      >
        Signup
      </IconButton>
      <Modal
        open={openSignup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Signup />
        </Box>
      </Modal>
    </div>
  );
};

export default SignupModal;
