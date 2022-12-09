const administrador = require("../models/administrador_model");
var sequelize = require("../models/database");
var config = require("../config");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var controllers = {};
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await administrador.findAll()
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data });
};
//Login
controllers.register = async (req, res) => {
  const { idCidade, imgem_perfil, nome, pais, email, password, validado } = req.body;
  const data = await administrador.create({
        idCidade: idCidade,
        imgem_perfil: imgem_perfil,
        nome: nome,
        pais: pais,
        email: email,
        password: password,
        validado: validado,
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      console.log("Erro: " + error);
      return error;
    });
  res.status(200).json({
    success: true,
    message: "Registado",
    data: data,
  });
};
controllers.login = async (req, res) => {
  console.log("estive aqui")
  if (req.body.email && req.body.password) {
    var email = req.body.email;
    var password = req.body.password;
  }
  var administrador1 = await administrador.findOne({ where: { nome: email } })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      console.log("Erro: " + error);
      return error;
    });
    console.log(administrador1);

  if (password === null || typeof password === "undefined") {
    res.status(403).json({
      success: false,
      message: "Campos em Branco",
    });
  } else {
    if (req.body.email && req.body.password && administrador1) {
      console.log(req.body.password);
      console.log(administrador1.password);
      var isMatch = bcrypt.compareSync(req.body.password, administrador1.password);
      console.log(isMatch)
     
      if (req.body.email === administrador1.nome && isMatch) {
        let token = jwt.sign({ email: req.body.nome }, config.jwtSecret, {
          expiresIn: "1h", //expira em 1 hora
        });
        res.json({
          success: true,
          message: "Autenticação realizada com sucesso!",
          token: token,
        });
      } else {
        res
          .status(403)
          .json({
            success: false,
            message: "Dados de autenticação inválidos.",
          });
      }
    } else {
      res
        .status(400)
        .json({
          success: false,
          message:
            "Erro no processo de autenticação. Tente de novo mais tarde.",
        });
    }
  }
};

/* Criar ---------------------- */
controllers.create = async (req, res) => {
  // data
  const {idCidade,imgem_perfil, nome, pais, email, password, validado} =
    req.body;
  // create
  const data = await administrador
    .create({
      idCidade: idCidade,
      imgem_perfil: imgem_perfil,
      nome: nome,
      pais: pais,
      email: email,
      password: password,
      validado: validado,
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
  const { idAdministrador } = req.params;
  const data = await administrador.findAll({
      where: { idAdministrador: idAdministrador },
      /*include: [ Role ]*/
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
  const { idAdministrador } = req.params;
  // parameter POST
  const {idCidade,imgem_perfil, nome, pais, email, password, validado} = req.body;
  // Update data
  const data = await administrador.update(
    {
      idCidade: idCidade,
      imgem_perfil: imgem_perfil,
      nome: nome,
      pais: pais,
      email: email,
      password: password,
      validado: validado,
    },
    {
      where: { idAdministrador: idAdministrador },
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
  const {idAdministrador } = req.body;
  // delete por sequelize
  const del = await administrador.destroy({
  where: { idAdministrador: idAdministrador}
  })
  res.json({success:true,deleted:del,message:"Deleted successful"});
  }

module.exports = controllers;
