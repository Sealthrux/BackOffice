var Sequelize = require("sequelize");
const sequelize = require("./database");

var trabalhadores = sequelize.define(
  "trabalhadores",
  {
    idtrabalhador: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idtipotrabalhador: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_trabalhadores',
        key: 'idtipotrabalhador'
      }
    },
    nome: {
      type: Sequelize.STRING(250),
      allowNull: true
    },
    email: {
      type: Sequelize.STRING(250),
      allowNull: true
    },
    datanasc: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    tlf: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    nif: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    username: {
      type: Sequelize.STRING(250),
      allowNull: true
    },
    password: {
      type: Sequelize.STRING(250),
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = trabalhadores;
