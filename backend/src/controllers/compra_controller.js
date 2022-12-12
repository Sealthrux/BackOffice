const compra = require("../models/compra_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await compra.findAll()
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
  const { idcliente, datacompra } =
    req.body;
  // create
  const data = await compra
    .create({
      idcliente: idcliente,
      datacompra: datacompra,
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
  const idcompra = req.params;
  const data = await compra.findOne({
    where: { id: idcompra },
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
  const { idcompra } = req.params;
  // parameter POST
  const { idcliente, datacompra } = req.body;
  // Update data
  const data = await cliente.update(
    {
      idcliente: idcliente,
      datacompra: datacompra,
    },
    {
      where: { idcompra: idcompra },
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
  const { idcompra } = req.body;
  // delete por sequelize
  const del = await cliente.destroy({
    where: { idcompra: idcompra }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;
