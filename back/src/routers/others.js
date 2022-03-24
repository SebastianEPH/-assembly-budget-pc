const express = require('express')
const router = express.Router();
const store = require('../controller/controller_store')
const brand= require('../controller/controller_brand')


router.get('/store', store.get)
router.get('/brand', brand.get)





module.exports = router;