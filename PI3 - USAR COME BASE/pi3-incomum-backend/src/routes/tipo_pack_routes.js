const express = require('express');
const router = express.Router();

//importer os controladores
const tipoPackController = require('../controllers/tipo_pack_controller');
router.get('/list', tipoPackController.list);
router.post('/create', tipoPackController.create);
router.get('/get/:idtipo', tipoPackController.get);
router.put('/update/:idtipo', tipoPackController.update);
router.post('/delete', tipoPackController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Tipo Pack Saved' });
});
module.exports = router;
