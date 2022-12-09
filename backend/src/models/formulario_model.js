var Sequelize = require("sequelize");
const sequelize = require("./database");

var formulario = sequelize.define(
  "formulario",
  {
    idformulario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    datapreenchimento: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    descricao: {
      type: Sequelize.STRING(250),
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);



module.exports = formulario;
