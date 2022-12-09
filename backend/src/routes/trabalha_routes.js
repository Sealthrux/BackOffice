const express = require('express');
const router = express.Router();

//importer os controladores
const trabalhaController = require('../controllers/trabalha_controller');
router.get('/list', trabalhaController.list);
router.post('/create', trabalhaController.create);
router.get('/get/:idcliente', trabalhaController.get);
router.put('/update/:idcliente', trabalhaController.update);
router.post('/delete', trabalhaController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Cliente Saved' });
});
module.exports = router;
