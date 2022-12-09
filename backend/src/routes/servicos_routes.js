const express = require('express');
const router = express.Router();

//importer os controladores
const servicosController = require('../controllers/servicos_controller');
router.get('/list', servicosController.list);
router.post('/create', servicosController.create);
router.get('/get/:idservicos', servicosController.get);
router.put('/update/:idservicos', servicosController.update);
router.post('/delete', servicosController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Servico Saved' });
});
module.exports = router;
