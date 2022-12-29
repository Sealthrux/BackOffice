const express = require("express");
const router = express.Router();

//importer os controladores
const recompensasController = require("../controllers/recompensas_controller");
router.get("/list", recompensasController.list);
router.post("/create", recompensasController.create);
router.get("/get/:idrecompensas", recompensasController.get);
router.put("/update/:idvoucher", recompensasController.update);
router.delete("/delete/:idvoucher", recompensasController.delete);
router.get("/save", (req, res) => {
  res.json({ status: "recompensas Saved" });
});

router.get("/listrecompensas", recompensasController.listrecompensas);

module.exports = router;
