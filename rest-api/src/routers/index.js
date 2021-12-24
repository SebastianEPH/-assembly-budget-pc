const express = require('express')
const router = express.Router();
const project = require('../controller/index')



router.get('/', project .get)
router.post ('/', project.add)
router.put('/:id', project.update)




module.exports = router;