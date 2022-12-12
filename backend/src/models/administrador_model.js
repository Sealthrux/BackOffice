var Sequelize = require("sequelize");
const sequelize = require("./database");
const bcrypt = require("bcrypt"); //encripta a pass a guardar na BD

var Administrador = sequelize.define(
  "administrador",
  {
    idAdministrador: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imgem_perfil: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    nome: {
      type: Sequelize.STRING,
    },
    pais: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    validado: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
Administrador.beforeCreate((administrador, options) => {
  return bcrypt
    .hash(administrador.password, 10)
    .then((hash) => {
      administrador.password = hash;
    })
    .catch((err) => {
      throw new Error();
    });
});

module.exports = Administrador;
