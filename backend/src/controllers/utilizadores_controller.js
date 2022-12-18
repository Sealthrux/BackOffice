const utilizador = require("../models/utilizadores_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await utilizador.findAll()
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
  const data = await utilizador
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
  const idutilizador = req.params;
  const data = await utilizador.findOne({
    where: { idutilizador: idutilizador },
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
  const { idutilizador } = req.params;
  // parameter POST
  const { nome, email } = req.body;
  // Update data
  const data = await utilizador.update(
    {
      nome: nome,
      email: email,
    },
    {
      where: { idutilizador: idutilizador },
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
  const { idutilizador } = req.body;
  // delete por sequelize
  const del = await utilizador.destroy({
    where: { idutilizador: idutilizador }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;
