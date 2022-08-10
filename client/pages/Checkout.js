import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import axios from "axios";

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

  const handleSubmit = async () => {
    await axios.put("/api/order-session", {
      ...checkoutInfo,
      token: window.localStorage.token,
    });
    setCheckoutInfo(initialCheckoutInfo);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
          maxWidth: "80%",
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
      <button onClick={handleSubmit}>Buy</button>
    </>
  );
};

export default Checkout;
