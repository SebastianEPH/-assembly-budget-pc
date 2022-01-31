const motherboard= {}
const pool = require('../../database')

motherboard.get = async (req, res) =>{
    const {proforma_id} = req.params
    console.log(req.params)


    const motherboard = await pool.query('SELECT * from motherboard where proforma_id = ? ',[ proforma_id])

    console.log(motherboard)
    res.json(motherboard)
}


module.exports = motherboard;