const express = require('express');
const router = express.Router();

//importer os controladores
const historicoController = require('../controllers/historico_controller');
router.get('/list', historicoController.list);
router.post('/create', historicoController.create);
router.get('/get/:idhistorico', historicoController.get);
router.put('/update/:idhistorico', historicoController.update);
router.post('/delete', historicoController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Historico Saved' });
});
module.exports = router;
