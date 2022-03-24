
const express = require('express');
const router = express.Router();


const motherboard =  require("../controller/componets/controller_motherboard")

// Motherboard
router.get("/proforma/:proforma_id/motherboard", motherboard.getIf)
router.post("/proforma/:proforma_id/motherboard", motherboard.add)
router.delete("/proforma/:proforma_id/motherboard/:motherboard_id", motherboard.delete)
router.put("/proforma/:proforma_id/motherboard/:motherboard_id", motherboard.update)


module.exports = router;