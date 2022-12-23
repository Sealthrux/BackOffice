const express = require('express');
const router = express.Router();

//importer os controladores
const vouchersController = require('../controllers/vouchers_controller');
router.get('/list', vouchersController.list);
router.post('/create', vouchersController.create);
router.get('/get/:idpack', vouchersController.get);
router.put('/update/:idpack', vouchersController.update);
router.delete('/delete/:idpack', vouchersController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'vouchers Saved' });
});

router.get('/listMarktingDigital', vouchersController.listMarktingDigital);
router.get('/listDesignGrafico', vouchersController.listDesignGrafico);
router.get('/listWebsitesELojasOnline', vouchersController.listWebsitesELojasOnline);
router.get('/listComunicacaoEConsultoria', vouchersController.listComunicacaoEConsultoria);

module.exports = router;
