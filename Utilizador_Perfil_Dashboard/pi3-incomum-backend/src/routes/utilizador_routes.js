const express = require('express');
const router = express.Router();

//importer os controladores
const utilizadorController = require('../controllers/utilizador_controller.js');
router.get('/list', utilizadorController.list);
router.post('/create', utilizadorController.create);
router.get('/get/:user_id', utilizadorController.get);
router.put('/update/:user_id', utilizadorController.update);
router.delete('/delete/:user_id', utilizadorController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'utilizador Saved' });
});

module.exports = router;