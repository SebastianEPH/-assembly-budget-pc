const express = require("express");
const router = express.Router();

const keyboard =  require("../controller/componets/keyboard")

// Processor
router.get("/proforma/:proforma_id/keyboard", keyboard.getIf)
router.post("/proforma/:proforma_id/keyboard", keyboard.add)
router.delete("/proforma/:proforma_id/keyboard/:keyboard_id", keyboard.delete)
router.put("/proforma/:proforma_id/keyboard/:keyboard_id", keyboard.update)

module.exports = router;