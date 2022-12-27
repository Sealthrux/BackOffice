var Sequelize = require("sequelize");
const sequelize = require("./database");

var vouchers = sequelize.define(
  "vouchers",
  {
    V_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Recompensa_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'recompensas',
        key: 'Recompensa_ID'
      }
    },
    PontosInteresse_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Pontos_Interesse',
        key: 'PontosInteresse_ID'
      }
    },
    V_titulo: {
      type: Sequelize.STRING(250),
      allowNull: false
    },
    V_Descricao: {
      type: Sequelize.STRING(250),
      allowNull: true
    },
    V_Custo: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    V_QRCode: {
      type: Sequelize.BLOB('long'),
      allowNull: true
    },
    V_Validade: {
      type: Sequelize.DATE,
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = vouchers;
