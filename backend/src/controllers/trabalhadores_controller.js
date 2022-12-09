const trabalhadores = require("../models/trabalhadores_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await trabalhadores.findAll()
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
  const { idtipotrabalhador, nome, email, datanasc, tlf, nif, username, password } =
    req.body;
  // create
  const data = await trabalhadores
    .create({
      idtipotrabalhador: idtipotrabalhador,
      nome: nome,
      email: email,
      datanasc: datanasc,
      tlf: tlf,
      nif: nif,
      username: username,
      password: password,
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
  const idtrabalhador = req.params;
  const data = await trabalhadores.findOne({
    where: { id: idtrabalhador },
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
  const { idtrabalhador } = req.params;
  // parameter POST
  const { idtipotrabalhador, nome, email, datanasc, tlf, nif, username, password } = req.body;
  // Update data
  const data = await trabalhadores.update(
    {
      idtipotrabalhador: idtipotrabalhador,
      nome: nome,
      email: email,
      datanasc: datanasc,
      tlf: tlf,
      nif: nif,
      username: username,
      password: password,
    },
    {
      where: { idtrabalhador: idtrabalhador },
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
  const { idtrabalhador } = req.body;
  // delete por sequelize
  const del = await trabalhadores.destroy({
    where: { idtrabalhador: idtrabalhador }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;
