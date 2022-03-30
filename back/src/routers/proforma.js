const express = require('express')
const router = express.Router();
const proforma = require('../controller/controller_proforma')



router.get('/proforma', proforma.getAll)
router.delete('/proforma/:id', proforma.removeOnly)
router.post('/proforma', proforma.add)
router.get('/proforma/:id', proforma.get_only)



module.exports = router;