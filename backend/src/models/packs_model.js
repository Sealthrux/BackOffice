var Sequelize = require("sequelize");
const sequelize = require("./database");

var packs = sequelize.define(
  "packs",
  {
    idpack: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING(250),
      allowNull: true
    },
    preco: {
      type: Sequelize.DECIMAL,
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = packs;
