const express = require("express");
const router = express.Router();

const graphicscard =  require("../controller/componets/graphicscard")

// Processor
router.get("/proforma/:proforma_id/graphicscard", graphicscard.getIf)
router.post("/proforma/:proforma_id/graphicscard", graphicscard.add)
router.delete("/proforma/:proforma_id/graphicscard/:graphicscard_id", graphicscard.delete)
router.put("/proforma/:proforma_id/graphicscard/:graphicscard_id", graphicscard.update)

module.exports = router;