const memoryram = {}
const pool = require('../../database')

memoryram.add = async (req, res) =>{

}
memoryram.update=async (req, res) =>{
    console.log(req.body)
    console.log("entro al update , to ok ")
    const {memoryram_id, proforma_id } = req.params


    const update =  await pool.query('UPDATE memory_ram set ? WHERE id =? AND proforma_id = ? ',[req.body,memoryram_id,proforma_id])
    //await pool.query('UPDATE question set ? WHERE que_id = ?', [data, id])
    console.log('esto es update del back ',update)
    res.json({message:"se guardó con exito "})
}





module.exports  =  memoryram;