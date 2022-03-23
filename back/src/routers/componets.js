const express = require('express');
const processor =  require("../controller/componets/ctrl_processor")
const motherboard =  require("../controller/componets/ctrl_motherboard")
const memoryram =  require("../controller/componets/ctrl_memoryram")
const powersupply=  require("../controller/componets/ctrl_powersupply")



const router = express.Router();

// Processor
router.get("/proforma/:proforma_id/processor", processor.getIf)
router.post("/proforma/:proforma_id/processor", processor.add)
router.delete("/proforma/:proforma_id/processor/:processor_id", processor.delete)
router.put("/proforma/:proforma_id/processor/:processor_id", processor.update)


// Processor type
router.get("/processor_type", processor.getType)

// PowerSupply
router.get("/proforma/:proforma_id/powersupply", powersupply.getIf)
router.post("/proforma/:proforma_id/powersupply", powersupply.add)
router.delete("/proforma/:proforma_id/powersupply/:powersupply_id", powersupply.delete)
router.put("/proforma/:proforma_id/powersupply/:powersupply_id", powersupply.update)

// PowerSupply Certificate
router.get("/powersupply_certificate", powersupply.getCertificate)

// PowerSupply Certificate
router.get("/powersupply_watts", powersupply.getWatts)

// Motherboard
router.get("/proforma/:proforma_id/motherboard", motherboard.getIf)
router.post("/proforma/:proforma_id/motherboard", motherboard.add)
router.delete("/proforma/:proforma_id/motherboard/:motherboard_id", motherboard.delete)
router.put("/proforma/:proforma_id/motherboard/:motherboard_id", motherboard.update)

// Memory RAM
router.get("/proforma/:proforma_id/memoryram", memoryram.getIf)
router.post("/proforma/:proforma_id/memoryram", memoryram.add)
router.delete("/proforma/:proforma_id/memoryram/:memoryram_id", memoryram.delete)
router.put("/proforma/:proforma_id/memoryram/:memoryram_id", memoryram.update)

// Memory RAM Type
router.get("/memoryram_type", memoryram.getType)

// Memory RAM Size
router.get("/memoryram_size", memoryram.getSize)

// Memory RAM Frequency
router.get("/memoryram_frequency", memoryram.getFrequency)


module.exports = router;