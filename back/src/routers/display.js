const express = require("express");
const router = express.Router();

const display =  require("../controller/componets/controller_display")

// display
router.get("/proforma/:proforma_id/display", display.getIf)
router.post("/proforma/:proforma_id/display", display.add)
router.delete("/proforma/:proforma_id/display/:display_id", display.delete)
router.put("/proforma/:proforma_id/display/:display_id", display.update)


// display Type
router.get("/display_panel", display.getPanel)

// display Size
router.get("/display_size", display.getSize)


module.exports = router;