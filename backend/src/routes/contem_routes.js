const express = require('express');
const router = express.Router();

//importer os controladores
const contemController = require('../controllers/contem_controller');
router.get('/list', contemController.list);
router.post('/create', contemController.create);
router.get('/get/:idcontem', contemController.get);
router.put('/update/:idcontem', contemController.update);
router.post('/delete', contemController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Contem Saved' });
});
module.exports = router;
