const express = require('express');
const processor =  require("../controller/componets/ctrl_processor")
const motherboard =  require("../controller/componets/ctrl_motherboard")



const router = express.Router();

// processor
router.get("/:proforma_id/processor", processor.get)
router.post("/:proforma_id/processor", processor.add)
router.put("/:proforma_id/processor/:processor_id", processor.update)
//router.get("/:id_proforma/processor/:id_processor", processor.get_only)
//router.get("/:id_proforma/processor", processor.get)

// Motherboard
router.get("/:proforma_id/motherboard", motherboard.get)
//router.get("/:proforma_id/motherboard/:motherboard_id", processor.getOnly)



module.exports = router;