var Sequelize = require("sequelize");
const sequelize = require("./database");

var servicos = sequelize.define(
  "servicos",
  {
    idservicos: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    atributos: {
      type: Sequelize.STRING(250),
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = servicos;
