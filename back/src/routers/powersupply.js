const express = require('express');

const router = express.Router();
const powersupply=  require("../controller/componets/powersupply")

// PowerSupply
router.get("/proforma/:proforma_id/powersupply", powersupply.getIf)
router.post("/proforma/:proforma_id/powersupply", powersupply.add)
router.delete("/proforma/:proforma_id/powersupply/:powersupply_id", powersupply.delete)
router.put("/proforma/:proforma_id/powersupply/:powersupply_id", powersupply.update)


// PowerSupply Certificate
router.get("/powersupply_certificate", powersupply.getCertificate)

// PowerSupply Certificate
router.get("/powersupply_watts", powersupply.getWatts)


module.exports = router;