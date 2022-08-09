const Sequelize = require("sequelize");
const db = require("../db");

const ProductOrderSession = db.define("productOrderSessions", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = ProductOrderSession;
