var Sequelize = require("sequelize");
const sequelize = require("./database");

var tipo_trabalhadores = sequelize.define(
  "tipo_trabalhadores",
  {
    idtipotrabalhador: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING(250),
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = tipo_trabalhadores;
