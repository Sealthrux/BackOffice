var sequelize = require("../models/database");
const trabalhadores = require("../models/trabalhadores_model");
const cliente = require("../models/utilizadores_model");
const compra = require("../models/compra_model");
var controllers = {};
sequelize.sync();

controllers.contartrabalhadores = async (req, res) => {
  const data = await sequelize
  .query(
    `SELECT COUNT("idtrabalhador") FROM "trabalhadores"`,
    {
      type: trabalhadores.SELECT,
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

controllers.contarcliente = async (req, res) => {
  const data = await sequelize
  .query(
    `select count("idcliente") from "cliente" `,
    {
      type: cliente.SELECT,
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

controllers.contarcompra = async (req, res) => {
  const data = await sequelize
  .query(
    `select count("idcompra") from "compra"`,
    {
      type: compra.SELECT,
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