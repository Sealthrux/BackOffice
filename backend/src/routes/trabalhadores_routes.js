const express = require('express');
const router = express.Router();

//importer os controladores
const trabaladoresController = require('../controllers/trabalhadores_controller');
router.get('/list', trabaladoresController.list);
router.post('/create', trabaladoresController.create);
router.get('/get/:idtrabalhador', trabaladoresController.get);
router.put('/update/:idtrabalhador', trabaladoresController.update);
router.post('/delete', trabaladoresController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Trabalhador Saved' });
});
module.exports = router;
