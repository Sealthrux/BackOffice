const recompensas = require("../models/recompensas_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await recompensas.findAll()
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
  const { Rec_Desc, V_titulo} =
    req.body;
  // create
  const data = await recompensas
    .create({
      Rec_Desc: Rec_Desc,
      V_titulo: V_titulo,
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
  const {RecompeRecompensa_ID} = req.params;
  const data = await recompensas.findOne({
    where: {Recompensa_ID:Recompensa_ID },
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
  const {Recompensa_ID } = req.params;
  // parameter POST
  const { Rec_Desc, V_titulo} = req.body;
  // Update data
  const data = await recompensas.update(
    {
      Recompensa_ID: Recompensa_ID,
      Rec_Desc: Rec_Desc,
      V_titulo: V_titulo,
    },
    {
      where: {Recompensa_ID:Recompensa_ID },
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
  const {Recompensa_ID } = req.params;
  // delete por sequelize
  const del = await recompensas.destroy({
    where: {Recompensa_ID:Recompensa_ID }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}


module.exports = controllers;
