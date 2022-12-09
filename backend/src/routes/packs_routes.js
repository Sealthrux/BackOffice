const express = require('express');
const router = express.Router();

//importer os controladores
const packsController = require('../controllers/packs_controller');
router.get('/list', packsController.list);
router.post('/create', packsController.create);
router.get('/get/:idCidade', packsController.get);
router.put('/update/:idCidade', packsController.update);
router.post('/delete', packsController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Packs Saved' });
});
module.exports = router;
