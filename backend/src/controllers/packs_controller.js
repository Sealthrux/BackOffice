const packs = require("../models/packs_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await packs.findAll()
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
  const { idtipo, nome, preco } =
    req.body;
  // create
  const data = await packs
    .create({
      idtipo: idtipo,
      nome: nome,
      preco: preco,
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
  const idpack = req.params;
  const data = await packs.findOne({
    where: { id: idpack },
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
  const { idpack } = req.params;
  // parameter POST
  const { idtipo, nome, preco } = req.body;
  // Update data
  const data = await packs.update(
    {
      idtipo: idtipo,
      nome: nome,
      preco: preco,
    },
    {
      where: { idpack: idpack },
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
  const { idpack } = req.body;
  // delete por sequelize
  const del = await formulario.destroy({
    where: { idpack: idpack }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;
