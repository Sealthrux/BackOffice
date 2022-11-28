var Sequelize = require("sequelize");
const sequelize = require("./database");

var compra = sequelize.define(
  "compra",
  {
    idcompra: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    idcliente: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'cliente',
        key: 'idcliente'
      }
    },
    datacompra: {
      type: Sequelize.DATEONLY,
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = compra;
