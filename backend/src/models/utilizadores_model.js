var Sequelize = require("sequelize");
const sequelize = require("./database");

var utilizadores = sequelize.define(
  "user",
  {
    idcliente: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    idhistorico: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'historico',
        key: 'idhistorico'
      }
    },
    nome: {
      type: Sequelize.STRING(250),
      allowNull: true
    },
    email: {
      type: Sequelize.STRING(250),
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = utilizadores;
