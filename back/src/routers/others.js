const express = require('express')
const router = express.Router();
const store = require('../controller/ctrl_store')
const brand= require('../controller/ctrl_brand')
const brandProcessor= require('../controller/ctrl_brand_processor')


router.get('/store', store.get)
router.get('/brand_processor', brandProcessor.get)
router.get('/brand', brand.get)





module.exports = router;