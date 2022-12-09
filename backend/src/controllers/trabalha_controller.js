const trabalha = require("../models/trabalha_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await trabalha.findAll()
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
  const { idtrabalhador } =
    req.body;
  // create
  const data = await trabalha
    .create({
      idtrabalhador: idtrabalhador,
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
  const idcliente = req.params;
  const data = await trabalha.findOne({
    where: { id: idcliente },
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
  const { idcliente } = req.params;
  // parameter POST
  const { idtrabalhador } = req.body;
  // Update data
  const data = await tipo_trabalhadores.update(
    {
      idtrabalhador: idtrabalhador,
    },
    {
      where: { idcliente: idcliente },
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
  const { idcliente } = req.body;
  // delete por sequelize
  const del = await trabalha.destroy({
    where: { idcliente: idcliente }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;
