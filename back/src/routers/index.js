const express = require('express')
const router = express.Router();
const projects = require('../controller/ctrl_projects')



router.get('/', projects.get)
router.get('/:id', projects.getOnly)
router.post ('/', projects.add)
router.put('/:id', projects.update)
router.delete('/:id', projects.delete)





module.exports = router;