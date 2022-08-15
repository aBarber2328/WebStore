import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const initialCheckoutInfo = {
  firstName: "",
  lastName: "",
  Email: "",
  Phone: "",
  shippingAddress: "",
  city: "",
  state: "",
  paymentMethod: "",
  cardNumber: "",
};

const checkoutParams = [
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Shipping Address",
  "City",
  "State",
  "Payment Method",
  "Card Number",
];

const Checkout = () => {
  const [checkoutInfo, setCheckoutInfo] = useState(initialCheckoutInfo);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCheckoutInfo((checkoutInfo) => ({
      ...checkoutInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.put("/api/order-session/checkout", {
      ...checkoutInfo,
      token: window.localStorage.token,
    });
    setCheckoutInfo(initialCheckoutInfo);
    alert("Congrats, you just purchase!");
  };

  return (
    <div className="checkout">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
          // maxWidth: "80%",
        }}
        noValidate
        autoComplete="off"
      >
        {Object.keys(initialCheckoutInfo).map((param, index) => (
          <FormControl key={param}>
            <InputLabel htmlFor="component-outlined">
              {checkoutParams[index]}
            </InputLabel>
            <OutlinedInput
              name={param}
              value={checkoutInfo[param]}
              onChange={handleChange}
              label={checkoutParams[index]}
            />
          </FormControl>
        ))}
      </Box>
      <div>This is a test</div>
      <button onClick={(event) => handleSubmit(event)}>Buy</button>
    </div>
  );
};

export default Checkout;
