const formulario = require("../models/formulario_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await formulario.findAll()
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
  const { idcliente, datapreenchimento, descricao } =
    req.body;
  // create
  const data = await compra
    .create({
      idcliente: idcliente,
      datapreenchimento: datapreenchimento,
      descricao: descricao,
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
  const idformulario = req.params;
  const data = await formulario.findOne({
    where: { id: idformulario },
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
  const { idformulario } = req.params;
  // parameter POST
  const { idcliente, datapreenchimento, descricao } = req.body;
  // Update data
  const data = await cliente.update(
    {
      idcliente: idcliente,
      datapreenchimento: datapreenchimento,
      descricao: descricao,
    },
    {
      where: { idformulario: idformulario },
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
  const { idformulario } = req.body;
  // delete por sequelize
  const del = await formulario.destroy({
    where: { idformulario: idformulario }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;
