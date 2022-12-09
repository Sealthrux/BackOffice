const express = require('express');
const router = express.Router();

//importer os controladores
const dashboardcontroller = require('../controllers/dashboard_controller');
router.get('/contartrabalhadores', dashboardcontroller.contartrabalhadores);
router.get('/contarcliente', dashboardcontroller.contarcliente);
router.get('/contarcompra', dashboardcontroller.contarcompra);

module.exports = router;