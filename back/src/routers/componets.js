const express = require('express');
const processor =  require("../controller/componets/ctrl_processor")

const router = express.Router();

// processor
router.post("/:id_proforma/processor/:id_processor", processor.post)
router.put("/:id_proforma/processor/:id_processor", processor.put)
//router.get("/:id_proforma/processor/:id_processor", processor.get_only)
//router.get("/:id_proforma/processor", processor.get)



module.exports = router;