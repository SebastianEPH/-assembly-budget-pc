const memoryram = {}
const pool = require('../../database')
const {parse,responseDB} = require("../../helpers/helpers")

memoryram.add = async (req, res) =>{
    const { proforma_id } = req.params
    console.log('esto es el proforma id',req.params)
    //parse IDs from params
    const parseIds = parse.IdForDB([ proforma_id ])
    if(!parseIds.passed){return res.status(parseIds.status).json({message:parseIds.message})}

    // chack if the object data matches
    const parseBody= parse.ObjDB(req.body,["name","dol","sol","select","link"], ["type", "store","proforma_id","size", "freq","brand"])
    if(!parseBody.passed){return res.status(parseBody.status).json({message:parseBody.message})}

    try{ // try connection
        const querySQL = 'INSERT INTO memory_ram SET ?'
        const response =  responseDB(await pool.query(querySQL , [parseBody.data]))
        return res.status(response.status).json({message:response.message})
    }catch (E){
        return res.status(400).json({message:"The submitted data cannot be processed"})
    }

}
memoryram.update=async (req, res) =>{
    const {memoryram_id, proforma_id } = req.params

    //parse IDs from params
    const parseIds = parse.IdForDB([memoryram_id, proforma_id ])
    if(!parseIds.passed){return res.status(parseIds.status).json({message:parseIds.message})}

    // chack if the object data matches
    const parseBody= parse.ObjDB(req.body,["name","dol","sol","select", "link"], ["store","type","size", "freq","brand"])
    if(!parseBody.passed){return res.status(parseBody.status).json({message:parseBody.message})}

    try{ // try connection
        const querySQL = 'UPDATE memory_ram set ? WHERE id =? AND proforma_id = ?'
        const response =  responseDB(await pool.query(querySQL, [parseBody.data,memoryram_id,proforma_id]))
        return res.status(response.status).json({message:response.message})
    }catch (E){
        return res.status(400).json({message:"The submitted data cannot be processed"})
    }
}
module.exports  =  memoryram;