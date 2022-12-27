const express = require('express');
const router = express.Router();

//importer os controladores
const vouchersController = require('../controllers/vouchers_controller');
router.get('/list', vouchersController.list);
router.post('/create', vouchersController.create);
router.get('/get/:idvoucher', vouchersController.get);
router.put('/update/:idvoucher', vouchersController.update);
router.delete('/delete/:idvoucher', vouchersController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'vouchers Saved' });
});

router.get('/listVouchers', vouchersController.listVouchers);

module.exports = router;
