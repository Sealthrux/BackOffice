var sequelize = require("../models/database");
const utilizador = require("../models/utilizador_model");
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

/* Registar */
controllers.create = async (req, res) => {
  // data
  const { tipou_id, u_nome, u_email, u_password, u_pontos, u_regiao, u_imagem } =
    req.body;
  // create
  const data = await utilizador
    .create({
      tipou_id: tipou_id, 
      u_nome: u_nome, 
      u_email: u_email,
      u_password: u_password, 
      u_pontos: u_pontos, 
      u_regiao: u_regiao,
      u_imagem: u_imagem,
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

/* Obter dados */
controllers.get = async (req, res) => {
  const user_id = req.params;
  const data = await utilizador.findOne({
    where: user_id ,
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
    console.log(data);
  res.json({ success: true, data: data });
};

/* Editar */
controllers.update = async (req, res) => {
  // parameter get id
  const { user_id } = req.params;
  // parameter POST
  const { tipou_id, u_nome, u_email, u_password, u_pontos, u_regiao, u_imagem } = req.body;
  // Update data
  const data = await utilizador.update(
    {
      tipou_id: tipou_id, 
      u_nome: u_nome, 
      u_email: u_email,
      u_password: u_password, 
      u_pontos: u_pontos, 
      u_regiao: u_regiao,
      u_imagem: u_imagem,
    },
    {
      where: { user_id: user_id },
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

/* Apagar */
controllers.delete = async (req, res) => {
  // parâmetros por post
  const { user_id } = req.body;
  // delete por sequelize
  const del = await utilizador.destroy({
    where: { user_id: user_id }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;