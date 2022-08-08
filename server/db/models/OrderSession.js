const Sequelize  = require("sequelize");
const db = require("../db");


const OrderSession = db.define("orderSessions",{
  status: {
    type: Sequelize.ENUM('active', 'bought'),
    allowNull: false,
    defaultValue: "active",
  },
})

module.exports = OrderSession;
