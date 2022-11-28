const express = require('express');
const router = express.Router();

//importer os controladores
const clienteController = require('../controllers/cliente_controller');
router.get('/list', clienteController.list);
router.post('/create', clienteController.create);
router.get('/get/:idcliente', clienteController.get);
router.put('/update/:idcliente', clienteController.update);
router.post('/delete', clienteController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Cliente Saved' });
});
module.exports = router;
