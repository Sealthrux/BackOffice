const utilizadores = require("../models/utilizadores_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await cliente.findAll()
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
  const { nome, email } =
    req.body;
  // create
  const data = await cliente
    .create({

      nome: nome,
      email: email,
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
  const data = await cliente.findOne({
    where: { idcliente: idcliente },
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
  const { nome, email } = req.body;
  // Update data
  const data = await cliente.update(
    {
      nome: nome,
      email: email,
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
  const del = await cliente.destroy({
    where: { idcliente: idcliente }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;
