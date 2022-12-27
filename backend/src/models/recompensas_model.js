var Sequelize = require("sequelize");
const sequelize = require("./database");

var recompensas = sequelize.define(
  "recompensas",
  {
    Recompensa_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Rec_Desc: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },
    V_Titulo: {
      type: Sequelize.STRING(250),
      allowNull: true,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = recompensas;
