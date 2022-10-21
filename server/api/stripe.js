const router = require("express").Router();
const express = require("express");
module.exports = router;

// Import stripe API and get stripe secret key from server environment
const stripe = require("stripe")(process.env.STRIPE_SK);

// Get stripe end point secret key from Node.js environment variable
const endpointSecret = process.env.ENDPOINT_SECTRET;

// Create payment intent
router.post("/create-payment-intent", async (req, res) => {
  const { total } = req.body;

  // Create a PaymentIntent with the order amount and currency
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Create webhook to receive requests from Stripe
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send(200);
  }
);

// Find a specific stripe product
const findStripeProduct = async ({ name, img, price }) => {
  try {
    const allProducts = await getStripeProducts();

    // If Stripe product exist, update price in Stripe
    if (allProducts[name]) {
      // Update Stripe product and return Stripe product ID
      return await updateStripeProduct({
        stripePriceId: allProducts[name].stripePriceId,
        price,
      });
    }

    // If product doesn't exist, create new product
    return await createStripeProduct({ name, img, price });
  } catch (error) {
    console.log(error);
  }
};

// Get all products in stripe database
const getStripeProducts = async () => {
  try {
    const products = {};

    // Fetch all products from Stripe
    const { data: productsArr } = await stripe.products.list();

    for (let stripeProduct of productsArr) {
      products[stripeProduct.name] = {
        stripeProductId: stripeProduct.id,
        stripePriceId: stripeProduct["default_price"],
      };
    }
    return products;
  } catch (error) {
    console.log(error);
  }
};

// Create a new stripe product
const createStripeProduct = async ({ name, img, price }) => {
  try {
    // Converts text emoji to image
    const dataUri = await textToImage.generate(img);

    // Sends API request to Stripe to create product
    const { id: stripeProdId, default_price: stripePrice } =
      await stripe.products.create({
        name: name,
        images: [dataUri],
        default_price_data: {
          unit_amount: price * 100,
          currency: "usd",
        },
        expand: ["default_price"],
      });

    return { stripeProdId, stripePriceId: stripePrice.id };
  } catch (error) {
    console.log(error);
  }
};

// Update price of stripe product
const updateStripeProduct = async ({ stripePriceId, price }) => {
  try {
    // Update price to Stripe price ID
    await stripe.prices.update(stripePriceId, {
      currency_options: {
        eur: {
          unit_amount: price * 100,
        },
      },
    });

    return { stripePriceId };
  } catch (error) {
    console.log(error);
  }
};
