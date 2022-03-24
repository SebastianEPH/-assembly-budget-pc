const express = require("express");
const router = express.Router();

const case_ =  require("../controller/componets/controller_case")

// Processor
router.get("/proforma/:proforma_id/case", case_.getIf)
router.post("/proforma/:proforma_id/case", case_.add)
router.delete("/proforma/:proforma_id/case_/:case_id", case_.delete)
router.put("/proforma/:proforma_id/case_/:case_id", case_.update)

module.exports = router;