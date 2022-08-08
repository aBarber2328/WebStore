const Sequelize =require("sequelize");
const db =require("../db");



const ProductOrderSession = db.define("productOrderSessions", {
  quanitiy: Sequelize.INTEGER,
  allowNull: false,
  defaultValue: 0,
})
