var Sequelize = require("sequelize");
const sequelize = require("./database");

var trabalha = sequelize.define(
  "trabalha",
  {
    idcliente: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      references: {
        model: 'cliente',
        key: 'idcliente'
      }
    },
    idtrabalhador: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'trabalhadores',
        key: 'idtrabalhador'
      }
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);



module.exports = trabalha;
