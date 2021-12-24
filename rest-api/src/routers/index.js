const express = require('express')
const router = express.Router();
const project = require('../controller/index')



router.get('/', project.get)
router.get('/:id', project.getOnly)
router.post ('/', project.add)
router.put('/:id', project.update)
router.delete('/:id', project.delete)





module.exports = router;