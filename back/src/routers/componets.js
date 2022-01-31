const express = require('express');
const processor =  require("../controller/componets/ctrl_processor")

const router = express.Router();

// processor
router.post("/:proforma_id/processor", processor.add)
router.put("/:proforma_id/processor/:processor_id", processor.update)
//router.get("/:id_proforma/processor/:id_processor", processor.get_only)
//router.get("/:id_proforma/processor", processor.get)



module.exports = router;