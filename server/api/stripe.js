const router = require("express").Router();
module.exports = router;

const stripe = require("stripe")(
  "sk_test_51LqJ7vBJqjrTBHVahTDDJY0iX3DttXrzCSC6srniSNnnsGsBNbjFBqmUj1cceicEo0JuEute6vL6v7W70aSo3BZm00ZSOBLrRH"
);

const PORT = process.env.PORT || 8080;
const LOCAL_DOMAIN = "http://localhost:";
const PRODUCTION_DOMAIN = "https://web-store072222.herokuapp.com/";

router.post("/create-checkout-session", async (req, res) => {
  const line_items = [];

  for (let item of req.body.items) {
    line_items.push({
      price: item.stripePriceId,
      quantity: item.quantity,
    });
  }

  const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: "payment",
    success_url: `${LOCAL_DOMAIN}${PORT}`,
    cancel_url: `${LOCAL_DOMAIN}${PORT}`,
  });
  res.status(200).send(session.url);
});

// Get all products in stripe database
const getStripeProducts = async () => {
  const products = {};

  const { data: productsArr } = await stripe.products.list();

  for (let stripeProduct of productsArr) {
    products[stripeProduct.name] = stripeProduct.id;
  }

  return products;
};
