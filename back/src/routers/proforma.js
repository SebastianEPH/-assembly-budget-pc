const express = require('express')
const router = express.Router();
const proforma = require('../controller/controller_proforma')



router.get('/proforma', proforma.getAll)
router.post('/proforma', proforma.add)
router.get('/proforma/:id', proforma.get_only)
//router.post ('/', proforma.add)
//router.patch ('/proforma/:id', proforma.add_proforma)
//router.put('/:id', proforma.update)
//router.delete('/:id', proforma.delete)





module.exports = router;