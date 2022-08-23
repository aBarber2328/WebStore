import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import axios from "axios";
import { connect } from "react-redux";
import { fetchCart } from "../store/cart";

const initialCheckoutInfo = {
  firstName: "",
  lastName: "",
  Email: "",
  Phone: "",
  shippingAddress: "",
  city: "",
  state: "",
};

const checkoutTitles = [
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

const initialPaymentInfo = {
  paymentMethod: "",
  cardNumber: "",
  SVC: "",
};

const paymentTitles = ["Payment Method", "Card Number", "SVC"];

const Checkout = (props) => {
  const [checkoutInfo, setCheckoutInfo] = useState({
    ...initialCheckoutInfo,
    ...initialPaymentInfo,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCheckoutInfo((checkoutInfo) => ({
      ...checkoutInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (window.localStorage.getItem("token")) {
      await axios.put("/api/order-session/checkout", {
        ...checkoutInfo,
        token: window.localStorage.token,
      });
    } else {
      window.localStorage.removeItem("cart");
    }
    setCheckoutInfo({ ...initialCheckoutInfo, ...initialPaymentInfo });
    alert("Congrats, you just purchase!");
    props.setCart();
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
        <h3>Contact {"&"} Shipping Info:</h3>
        {Object.keys(initialCheckoutInfo).map((param, index) => (
          <FormControl key={param}>
            <InputLabel htmlFor="component-outlined">
              {checkoutTitles[index]}
            </InputLabel>
            <OutlinedInput
              name={param}
              value={checkoutInfo[param]}
              onChange={handleChange}
              label={checkoutTitles[index]}
            />
          </FormControl>
        ))}
        <h3>Payment Info:</h3>
        {Object.keys(initialPaymentInfo).map((param, index) => (
          <FormControl key={param}>
            <InputLabel htmlFor="component-outlined">
              {paymentTitles[index]}
            </InputLabel>
            <OutlinedInput
              name={param}
              value={checkoutInfo[param]}
              onChange={handleChange}
              label={checkoutTitles[index]}
            />
          </FormControl>
        ))}
      </Box>
      <Button onClick={(event) => handleSubmit(event)}>Buy</Button>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    setCart: () => {
      dispatch(fetchCart());
    },
  };
};

export default connect(null, mapDispatch)(Checkout);
