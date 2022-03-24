const express = require("express");
const router = express.Router();

const memoryram =  require("../controller/componets/controller_memoryram")

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