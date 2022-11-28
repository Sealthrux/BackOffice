const express = require('express');
const router = express.Router();

//importer os controladores
const compraController = require('../controllers/compra_controller');
router.get('/list', compraController.list);
router.post('/create', compraController.create);
router.get('/get/:idcompra', compraController.get);
router.put('/update/:idcompra', compraController.update);
router.post('/delete', compraController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Compra Saved' });
});
module.exports = router;
