const tipo_trabalhadores = require("../models/tipo_trabalhadores_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await tipo_trabalhadores.findAll()
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data });
};

/* REGISTAR ---------------------- */
controllers.create = async (req, res) => {
  // data
  const { nome } =
    req.body;
  // create
  const data = await tipo_trabalhadores
    .create({
      nome: nome,
    })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      console.log("Erro: " + error);
      return error;
    });
  // return res
  res.status(200).json({
    success: true,
    message: "Registado",
    data: data,
  });
};

/* BUSCAR para EDITAR */
controllers.get = async (req, res) => {
  const idtipotrabalhador = req.params;
  const data = await tipo_trabalhadores.findOne({
    where: { id: idtipotrabalhador },
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data });
};

/* EDITAR --------------------------------------------------- */
controllers.update = async (req, res) => {
  // parameter get id
  const { idtipotrabalhador } = req.params;
  // parameter POST
  const { nome } = req.body;
  // Update data
  const data = await tipo_trabalhadores.update(
    {
      nome: nome,
    },
    {
      where: { idtipotrabalhador: idtipotrabalhador },
    }
  )
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data, message: "Updated successful" });
};

controllers.delete = async (req, res) => {
  // parâmetros por post
  const { idtipotrabalhador } = req.body;
  // delete por sequelize
  const del = await tipo_trabalhadores.destroy({
    where: { idtipotrabalhador: idtipotrabalhador }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;
