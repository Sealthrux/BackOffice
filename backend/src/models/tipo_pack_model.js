const Sequelize = require("sequelize");
const sequelize = require("./database");

var tipo_pack = sequelize.define(
  "tipo_pack",
  {
    idtipo: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    designacao: {
      type: Sequelize.STRING(250),
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = tipo_pack;
