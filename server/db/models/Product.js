const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("products", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
  },
  stockQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  stripeProdId: {
    type: Sequelize.STRING,
  },
  stripePriceId: {
    type: Sequelize.STRING,
  },
});

module.exports = Product;
