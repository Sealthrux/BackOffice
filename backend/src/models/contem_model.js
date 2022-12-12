var Sequelize = require("sequelize");
const sequelize = require("./database");

var contem = sequelize.define(
  "contem",
  {
    idpack: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      references: {
        model: 'packs',
        key: 'idpack'
      }
    },
    idcompra: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'compra',
        key: 'idcompra'
      }
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = contem;
