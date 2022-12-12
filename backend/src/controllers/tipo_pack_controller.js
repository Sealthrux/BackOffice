const tipo_pack = require("../models/tipo_pack_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await tipo_pack.findAll()
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
  const { designacao } =
    req.body;
  // create
  const data = await tipo_pack
    .create({
      designacao: designacao,
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
  const idtipo = req.params;
  const data = await tipo_pack.findOne({
    where: { id: idtipo },
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
  const { idtipo } = req.params;
  // parameter POST
  const { designacao } = req.body;
  // Update data
  const data = await packs.update(
    {
      designacao: designacao,
    },
    {
      where: { idtipo: idtipo },
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
  const { idtipo } = req.body;
  // delete por sequelize
  const del = await tipo_pack.destroy({
    where: { idtipo: idtipo }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;
