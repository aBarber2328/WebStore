//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const OrderSession = require("./models/OrderSession");
const Product = require("./models/Product");
const ProductOrderSession = require("./models/ProductOrderSession");

//associations could go here!

User.hasMany(OrderSession);
OrderSession.belongsTo(User);

OrderSession.belongsToMany(Product, { through: "ProductOrderSession" });
Product.belongsToMany(OrderSession, { through: "ProductOrderSession" });

module.exports = {
  db,
  models: {
    User,
    OrderSession,
    Product,
    ProductOrderSession,
  },
};
