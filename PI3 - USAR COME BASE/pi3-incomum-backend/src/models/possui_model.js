var Sequelize = require("sequelize");
const sequelize = require("./database");

var possui = sequelize.define(
  "possui",
  {
    idservicos: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      references: {
        model: 'servicos',
        key: 'idservicos'
      }
    },
    idtipo: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_pack',
        key: 'idtipo'
      }
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);



module.exports = possui;
