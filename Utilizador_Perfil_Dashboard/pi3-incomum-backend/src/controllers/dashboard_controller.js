var sequelize = require("../models/database");
const utilizador = require("../models/utilizador_model");
var controllers = {};
sequelize.sync();

controllers.contarutilizador = async (req, res) => {
  const data = await sequelize
  .query(
    `SELECT COUNT("user_id") FROM "utilizador"`,
    {
      type: utilizador.SELECT,
    }
  )
  .then(function (data) {
    return data;
  })
  .catch((error) => {
    return error;
  });
res.json({ success: true, data: data[0][0].count });
};

module.exports = controllers;