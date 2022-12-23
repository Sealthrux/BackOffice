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
  const {idpack} = req.params;
  const data = await packs.findOne({
    where: { idpack: idpack },
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
  const { idpack } = req.params;
  // delete por sequelize
  const del = await packs.destroy({
    where: { idpack: idpack }
  })
  res.json({ success: true, deleted: del, message: "Deleted successful" });
}

//Filtro para packs frontend
controllers.listMarktingDigital = async (req, res) => {
  const data = await sequelize
  .query(
    `SELECT * FROM packs where idtipo = 1 `,
    {
      type: packs.SELECT,
    }
  )
  .then(function (data) {
    return data;
  })
  .catch((error) => {
    return error;
  });
res.json({ success: true, data: data[0] });
};

controllers.listDesignGrafico = async (req, res) => {
  const data = await sequelize
  .query(
    `SELECT * FROM packs where idtipo = 2 `,
    {
      type: packs.SELECT,
    }
  )
  .then(function (data) {
    return data;
  })
  .catch((error) => {
    return error;
  });
res.json({ success: true, data: data[0] });
};

controllers.listWebsitesELojasOnline = async (req, res) => {
  const data = await sequelize
  .query(
    `SELECT * FROM packs where idtipo = 3 `,
    {
      type: packs.SELECT,
    }
  )
  .then(function (data) {
    return data;
  })
  .catch((error) => {
    return error;
  });
res.json({ success: true, data: data[0] });
};

controllers.listComunicacaoEConsultoria = async (req, res) => {
  const data = await sequelize
  .query(
    `SELECT * FROM packs where idtipo = 4 `,
    {
      type: packs.SELECT,
    }
  )
  .then(function (data) {
    return data;
  })
  .catch((error) => {
    return error;
  });
res.json({ success: true, data: data[0] });
};


module.exports = controllers;
