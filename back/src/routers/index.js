const express = require('express')
const router = express.Router();
const projects = require('../controller/ctrl_projects')



router.get('/', projects.get)
router.get('/:id', projects.get_Only)
//router.post ('/', projects.add)
//router.patch ('/proforma/:id', projects.add_proforma)
//router.put('/:id', projects.update)
//router.delete('/:id', projects.delete)





module.exports = router;