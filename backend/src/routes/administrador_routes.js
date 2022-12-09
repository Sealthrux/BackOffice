const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

//importer os controladores
const administradorController = require('../controllers/administrador_controller');
router.get('/list', middleware.checkToken, administradorController.list);
router.post('/register',administradorController.register);
router.post('/login',administradorController.login);
router.post('/create',administradorController.create);
router.get('/get/:idAdministrador',administradorController.get);
router.put('/update/:idAdministrador', administradorController.update);
router.post('/delete', administradorController.delete);
router.get('/save', (req, res) => {
  res.json({ status: 'Administrador Saved' });
});
module.exports = router;
