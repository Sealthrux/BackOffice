const express = require('express');
const router = express.Router();

//importer os controladores
const possuiController = require('../controllers/possui_controller');
router.get('/list', possuiController.list);
router.post('/create', possuiController.create);
router.get('/get/:idpossui', possuiController.get);
router.put('/update/:idpossui', possuiController.update);
router.post('/delete', possuiController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Possui Saved' });
});
module.exports = router;
