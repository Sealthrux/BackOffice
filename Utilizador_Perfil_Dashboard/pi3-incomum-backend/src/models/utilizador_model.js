var Sequelize = require("sequelize");
const sequelize = require("./database");

var utilizador = sequelize.define(
  "utilizador",
  {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tipou_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_user',
        key: 'tipou_id'
      }
    },
    u_nome: {
      type: Sequelize.STRING(250),
      allowNull: false
    },
    u_email: {
      type: Sequelize.STRING(250),
      allowNull: false
    },
    u_password: {
      type: Sequelize.STRING(250),
      allowNull: false
    },
    u_pontos: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    u_regiao: {
      type: Sequelize.STRING(250),
      allowNull: false
    },
    u_imagem: {
      type: Sequelize.STRING(250),
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = utilizador;