const router = require("express").Router();
const express = require("express");
module.exports = router;

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(
  "sk_test_51LqJ7vBJqjrTBHVahTDDJY0iX3DttXrzCSC6srniSNnnsGsBNbjFBqmUj1cceicEo0JuEute6vL6v7W70aSo3BZm00ZSOBLrRH"
);

const endpointSecret =
  "whsec_cb7e88d3f87c0da118ec28d7e5363dfc618267c7cf8945bf7d6a77191893a7e9";
router.post("/create-payment-intent", async (req, res) => {
  const { items, total } = req.body;

  // Create a PaymentIntent with the order amount and currency
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
});

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      console.log("sigL ", sig);
      console.log("rerq body: ", request.body);
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log("SUCESS!");
    } catch (err) {
      console.log("Big Error", err);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

// Find a specific stripe product
// const findStripeProduct = async ({ name, img, price }) => {
//   const allProducts = await getStripeProducts();

//   if (allProducts[name]) {
//     // Update and return
//     console.log("product name: ", name);
//     return await updateStripeProduct({
//       stripePriceId: allProducts[name].stripePriceId,
//       price,
//     });
//   }

//   // Create new product if product doesn't exist
//   return await createStripeProduct({ name, img, price });
// };

// Get all products in stripe database
// const getStripeProducts = async () => {
//   const products = {};
//   const { data: productsArr } = await stripe.products.list();

//   for (let stripeProduct of productsArr) {
//     products[stripeProduct.name] = {
//       stripeProductId: stripeProduct.id,
//       stripePriceId: stripeProduct["default_price"],
//     };
//   }
//   console.log("Found all products!");
//   return products;
// };

// Create a new stripe product
const createStripeProduct = async ({ name, img, price }) => {
  console.log("Create Start!");
  const dataUri = await textToImage.generate(img);
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

  console.log("Create End!", stripePrice.id);
  return { stripeProdId, stripePriceId: stripePrice.id };
};

// Update price of stripe product
// const updateStripeProduct = async ({ stripePriceId, price }) => {
//   console.log("Update Start!");
//   console.log(typeof price, price);
//   const data = await stripe.prices.update(stripePriceId, {
//     currency_options: {
//       eur: {
//         unit_amount: 50 * 100,
//       },
//     },
//   });
//   console.log("price: ", data);

//   return { stripePriceId };
// };
