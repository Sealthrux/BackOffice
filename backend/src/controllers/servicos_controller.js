const servicos = require("../models/servicos_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await servicos.findAll()
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
  const { atributos } =
    req.body;
  // create
  const data = await servicos
    .create({
      atributos: atributos,
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
  const idservicos = req.params;
  const data = await servicos.findOne({
    where: { id: idservicos },
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
  const { idservicos } = req.params;
  // parameter POST
  const { atributos } = req.body;
  // Update data
  const data = await packs.update(
    {
      atributos: atributos,
    },
    {
      where: { idservicos: idservicos },
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
  const { idservicos } = req.body;
  // delete por sequelize
  const del = await servicos.destroy({
    where: { idservicos: idservicos }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;
