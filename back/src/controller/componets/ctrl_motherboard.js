const motherboard= {}
const pool = require('../../database')

motherboard.get = async (req, res) =>{
    const {proforma_id} = req.params
    console.log(req.params)


    const motherboard = await pool.query('SELECT * from motherboard where proforma_id = ?  ',[ proforma_id])

    console.log(motherboard)
    res.json(motherboard)
}
motherboard.update = async (req, res)=>{
    console.log(req.body)
    const {motherboard_id, proforma_id } = req.params


    const update =  await pool.query('UPDATE motherboard set ? WHERE id =? AND proforma_id = ? ',[req.body,motherboard_id,proforma_id])
    //await pool.query('UPDATE question set ? WHERE que_id = ?', [data, id])
    res.json('ok llego el update  ')
}

module.exports = motherboard;