const express = require("express");
const router = express.Router();

const processor =  require("../controller/componets/controller_processor")

// Processor
router.get("/proforma/:proforma_id/processor", processor.getIf)
router.post("/proforma/:proforma_id/processor", processor.add)
router.delete("/proforma/:proforma_id/processor/:processor_id", processor.delete)
router.put("/proforma/:proforma_id/processor/:processor_id", processor.update)


// Processor type
router.get("/processor_type", processor.getType)



module.exports = router;