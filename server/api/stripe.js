const router = require("express").Router();
module.exports = router;

const stripe = require("stripe")(
  "sk_test_51LqJ7vBJqjrTBHVahTDDJY0iX3DttXrzCSC6srniSNnnsGsBNbjFBqmUj1cceicEo0JuEute6vL6v7W70aSo3BZm00ZSOBLrRH"
);

const PORT = process.env.PORT || 8080;
const LOCAL_DOMAIN = "http://localhost:";
const PRODUCTION_DOMAIN = "https://web-store072222.herokuapp.com/";

router.post("/create-checkout-session", async (req, res) => {
  console.log(req.body);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1LqKM4BJqjrTBHVauwGHQg7H",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${LOCAL_DOMAIN}${PORT}/index.html`,
    cancel_url: `${LOCAL_DOMAIN}${PORT}/index.html`,
  });
  res.status(200).send(session.url);
});
