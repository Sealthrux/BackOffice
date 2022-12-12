var Sequelize = require("sequelize");
const sequelize = require("./database");

var historico = sequelize.define(
  "historico",
  {
    idhistorico: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING(250),
      allowNull: true
    },
    fotos: {
      type: Sequelize.CHAR(254),
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);



module.exports = historico;
