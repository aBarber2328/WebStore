import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchCart } from "../store/cart";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import SingleCheckoutItem from "../components/SingleCheckoutItem";

const initialCheckoutInfo = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  country: "",
  state: "",
  zip: "",
  city: "",
  paymentMethod: "",
  nameOnCard: "",
  creditCardNumber: "",
  expiration: "",
  cvv: "",
  promoCode: "",
};

const Checkout = (props) => {
  let cart = props.cart;

  const [total, setTotal] = useState(0);
  const [checkoutInfo, setCheckoutInfo] = useState(initialCheckoutInfo);

  useEffect(() => {
    props.setCart();
  }, []);

  useEffect(() => {
    if (cart.products !== undefined) {
      setTotal(calculateTotal(cart.products));
    }
  }, [cart]);

  const calculateTotal = (products) => {
    return products.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCheckoutInfo((checkoutInfo) => ({
      ...checkoutInfo,
      [name]: value,
    }));
  };

  // const handleSubmit = async (event) => {
  //   // event.preventDefault();
  //   if (window.localStorage.getItem("token")) {
  //     await axios.put("/api/order-session/checkout", {
  //       ...checkoutInfo,
  //       token: window.localStorage.token,
  //     });
  //   } else {
  //     window.localStorage.removeItem("cart");
  //   }

  //   alert("Congrats, you just purchase!", checkoutInfo);
  //   setCheckoutInfo({ ...initialCheckoutInfo });
  //   props.setCart();
  // };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert("congrats");
    }
    setValidated(true);
  };

  const handlePromoCode = (event) => {
    event.preventDefault();
    if (checkoutInfo["promoCode"] === "free") {
      setTotal(0);
      setCheckoutInfo((checkoutInfo) => ({
        ...checkoutInfo,
        promoCode: "",
      }));
    }
  };

  return (
    <div className="checkout">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          {!props.cart.products
            ? null
            : props.cart.products.map((product) => (
                <SingleCheckoutItem key={product.id} product={product} />
              ))}
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${total}</strong>
          </li>
        </ul>
      </div>
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              onChange={handleChange}
              name="firstName"
              value={checkoutInfo["firstName"]}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              onChange={handleChange}
              name="lastName"
              value={checkoutInfo["lastName"]}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={checkoutInfo["email"]}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              onChange={handleChange}
              name="address"
              value={checkoutInfo["address"]}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid address
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom07">
            <Form.Label>State</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Choose state</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              onChange={handleChange}
              name="city"
              value={checkoutInfo["city"]}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom08">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              onChange={handleChange}
              name="zip"
              value={checkoutInfo["zip"]}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom10">
            <Form.Label>Name on Card</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name on card"
              onChange={handleChange}
              name="nameOnCard"
              value={checkoutInfo["nameOnCard"]}
              required
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom11">
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Credit Card Number"
              onChange={handleChange}
              name="creditCardNumber"
              value={checkoutInfo["creditCardNumber"]}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid credit card number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom12">
            <Form.Label>Expiration</Form.Label>
            <Form.Control
              type="text"
              placeholder="Expiration"
              onChange={handleChange}
              name="expiration"
              value={checkoutInfo["expiration"]}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid expiration.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom13">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="text"
              placeholder="CVV"
              onChange={handleChange}
              name="cvv"
              value={checkoutInfo["cvv"]}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid cvv.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Confirm</Button>
      </Form>
    </div>
  );

  // <div className="checkout">
  //   <Box
  //     component="form"
  //     sx={{
  //       "& > :not(style)": { m: 1 },
  //       // maxWidth: "80%",
  //     }}
  //     noValidate
  //     autoComplete="off"
  //   >
  //     <h3>Contact {"&"} Shipping Info:</h3>
  //     {Object.keys(initialCheckoutInfo).map((param, index) => (
  //       <FormControl key={param}>
  //         <InputLabel htmlFor="component-outlined">
  //           {checkoutTitles[index]}
  //         </InputLabel>
  //         <OutlinedInput
  //           name={param}
  //           value={checkoutInfo[param]}
  //           onChange={handleChange}
  //           label={checkoutTitles[index]}
  //         />
  //       </FormControl>
  //     ))}
  //     <h3>Payment Info:</h3>
  //     {Object.keys(initialPaymentInfo).map((param, index) => (
  //       <FormControl key={param}>
  //         <InputLabel htmlFor="component-outlined">
  //           {paymentTitles[index]}
  //         </InputLabel>
  //         <OutlinedInput
  //           name={param}
  //           value={checkoutInfo[param]}
  //           onChange={handleChange}
  //           label={checkoutTitles[index]}
  //         />
  //       </FormControl>
  //     ))}
  //   </Box>
  //   <Button onClick={(event) => handleSubmit(event)}>Buy</Button>
  // </div>
  // );
};

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setCart: () => {
      dispatch(fetchCart());
    },
  };
};

export default connect(mapState, mapDispatch)(Checkout);
