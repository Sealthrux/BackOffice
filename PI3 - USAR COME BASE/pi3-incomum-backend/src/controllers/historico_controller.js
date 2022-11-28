const historico = require("../models/historico_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await historico.findAll()
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
  const { nome, fotos } =
    req.body;
  // create
  const data = await historico
    .create({
      nome: nome,
      fotos: fotos,

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
  const idhistorico = req.params;
  const data = await historico.findOne({
    where: { id: idhistorico },
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
  const { idhistorico } = req.params;
  // parameter POST
  const { nome, fotos } = req.body;
  // Update data
  const data = await cliente.update(
    {
      nome: nome,
      fotos: fotos,

    },
    {
      where: { idhistorico: idhistorico },
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
  const { idhistorico } = req.body;
  // delete por sequelize
  const del = await historico.destroy({
    where: { idhistorico: idhistorico }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;
