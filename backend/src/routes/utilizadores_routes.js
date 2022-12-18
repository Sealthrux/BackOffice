const express = require('express');
const router = express.Router();

//importer os controladores
const utilizadorController = require('../controllers/utilizadores_controller.js');
router.get('/list', utilizadorController.list);
router.post('/create', utilizadorController.create);
router.get('/get/:idutilizador', utilizadorController.get);
router.put('/update/:idutilizador', utilizadorController.update);
router.post('/delete', utilizadorController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'User Saved' });
});
module.exports = router;
