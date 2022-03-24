const express = require("express");
const router = express.Router();

const mouse =  require("../controller/componets/controller_mouse")

// Processor
router.get("/proforma/:proforma_id/mouse", mouse.getIf)
router.post("/proforma/:proforma_id/mouse", mouse.add)
router.delete("/proforma/:proforma_id/mouse/:mouse_id", mouse.delete)
router.put("/proforma/:proforma_id/mouse/:mouse_id", mouse.update)

module.exports = router;