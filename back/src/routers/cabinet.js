const express = require("express");
const router = express.Router();

const cabinet =  require("../controller/componets/controller_cabinet")

// Processor
router.get("/proforma/:proforma_id/cabinet", cabinet.getIf)
router.post("/proforma/:proforma_id/cabinet", cabinet.add)
router.delete("/proforma/:proforma_id/cabinet/:cabinet_id", cabinet.delete)
router.put("/proforma/:proforma_id/cabinet/:cabinet_id", cabinet.update)

module.exports = router;