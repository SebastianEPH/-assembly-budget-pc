const express = require('express')
const router = express.Router();
const store = require('../controller/ctrl_store')
const brand= require('../controller/ctrl_brand')


router.get('/store', store.get)
router.get('/brand', brand.get)
//router.get('/:id', store.get_Only)
//router.post ('/', store.add)
//router.patch ('/proforma/:id', store.add_proforma)
//router.put('/:id', store.update)
//router.delete('/:id', store.delete)





module.exports = router;