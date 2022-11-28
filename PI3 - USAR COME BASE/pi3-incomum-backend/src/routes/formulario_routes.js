const express = require('express');
const router = express.Router();

//importer os controladores
const formularioController = require('../controllers/formulario_controller');
router.get('/list', formularioController.list);
router.post('/create', formularioController.create);
router.get('/get/:idformulario', formularioController.get);
router.put('/update/:idformulario', formularioController.update);
router.post('/delete', formularioController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Formulario Saved' });
});
module.exports = router;
