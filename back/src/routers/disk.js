const express = require("express");
const router = express.Router();

const disk =  require("../controller/componets/controller_disk")

// disk
router.get("/proforma/:proforma_id/disk", disk.getIf)
router.post("/proforma/:proforma_id/disk", disk.add)
router.delete("/proforma/:proforma_id/disk/:disk_id", disk.delete)
router.put("/proforma/:proforma_id/disk/:disk_id", disk.update)

// disk Type
router.get("/disk_type", disk.getType)

// disk Size
router.get("/disk_size", disk.getSize)


module.exports = router;