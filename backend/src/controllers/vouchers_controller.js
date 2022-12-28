const vouchers = require("../models/vouchers_model");
var sequelize = require("../models/database");
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await vouchers.findAll()
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
  const { Recompensa_ID, PontosInteresse_ID, V_titulo,V_Descricao,V_Custo,V_QRCode,V_Validade } =
    req.body;
  // create
  const data = await vouchers
    .create({
      Recompensa_ID: Recompensa_ID,
      PontosInteresse_ID: PontosInteresse_ID,
      V_titulo: V_titulo,
      V_Descricao: V_Descricao,
      V_Custo: V_Custo,
      V_QRCode: V_QRCode,
      V_Validade: V_Validade,
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
  const {V_ID} = req.params;
  const data = await vouchers.findOne({
    where: { V_ID: V_ID },
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
  const { V_ID } = req.params;
  // parameter POST
  const { Recompensa_ID, PontosInteresse_ID, V_titulo,V_Descricao,V_Custo,V_QRCode,V_Validade} = req.body;
  // Update data
  const data = await vouchers.update(
    {
      Recompensa_ID: Recompensa_ID,
      PontosInteresse_ID: PontosInteresse_ID,
      V_titulo: V_titulo,
      V_Descricao: V_Descricao,
      V_Custo: V_Custo,
      V_QRCode: V_QRCode,
      V_Validade: V_Validade,
    },
    {
      where: { V_ID: V_ID },
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
  const { V_ID } = req.params;
  // delete por sequelize
  const del = await vouchers.destroy({
    where: { V_ID: V_ID }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}


module.exports = controllers;
