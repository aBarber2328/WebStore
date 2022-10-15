import axios from "axios";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import cart, { fetchCart } from "../store/cart";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51LqJ7vBJqjrTBHVaDC0lqUqdgRz7ZQMOjEKr0PyAfWpXnxn8QlM0jy1fn4pu3hCXEEUePg52Mj4dMetftZoVyr3H00Xlg2ifgj"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:8080/purchase-success",
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form className="bg-white" onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const CheckoutContainer = (props) => {
  // Get all products in cart
  let myCart = props.cart.products;

  // Total cost of cart
  const [total, setTotal] = useState(0);

  const [load, setLoad] = useState(false);

  const [option, setOption] = useState(null);

  // If cart changes, update the total price
  useEffect(() => {
    if (myCart !== undefined) {
      setTotal(calculateTotal(myCart));
      setLoad(true);
    }
  }, [myCart]);

  // Component did mount -> fetch cart
  useEffect(() => {
    props.fetchCart();
  }, []);

  useEffect(() => {
    if (load && !option) {
      (async () => {
        const client = await fetchClient();
        setOption(client);
      })();
    }
  }, [load, total]);

  // Redirect user to stripe checkout page when user clicks on checkout button
  const fetchClient = async () => {
    console.log(myCart, total);
    const { data } = await axios.post("/api/stripe/create-payment-intent", {
      items: myCart,
      total: total,
    });
    return data.clientSecret;
  };

  if (!option) return <></>;

  console.log(stripePromise, option);
  return (
    <Elements stripe={stripePromise} options={{ clientSecret: option }}>
      <CheckoutForm />
    </Elements>
  );
};

const calculateTotal = (myCart) => {
  return myCart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const mapDispatch = (dispatch) => {
  return {
    fetchCart: () => {
      dispatch(fetchCart());
    },
  };
};
const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapState, mapDispatch)(CheckoutContainer);
