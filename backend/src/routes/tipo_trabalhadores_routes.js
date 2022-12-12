const express = require('express');
const router = express.Router();

//importer os controladores
const tipoTrablhadoresController = require('../controllers/tipo_trabalhadores_controller');
router.get('/list', tipoTrablhadoresController.list);
router.post('/create', tipoTrablhadoresController.create);
router.get('/get/:idtipotrabalhador', tipoTrablhadoresController.get);
router.put('/update/:idtipotrabalhador', tipoTrablhadoresController.update);
router.post('/delete', tipoTrablhadoresController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Tipo Trabalhador Saved' });
});
module.exports = router;
