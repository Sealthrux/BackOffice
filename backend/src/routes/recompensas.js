const express = require('express');
const router = express.Router();

//importer os controladores
const packsController = require('../controllers/packs_controller');
router.get('/list', packsController.list);
router.post('/create', packsController.create);
router.get('/get/:idpack', packsController.get);
router.put('/update/:idpack', packsController.update);
router.delete('/delete/:idpack', packsController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Packs Saved' });
});

router.get('/listMarktingDigital', packsController.listMarktingDigital);
router.get('/listDesignGrafico', packsController.listDesignGrafico);
router.get('/listWebsitesELojasOnline', packsController.listWebsitesELojasOnline);
router.get('/listComunicacaoEConsultoria', packsController.listComunicacaoEConsultoria);

module.exports = router;
