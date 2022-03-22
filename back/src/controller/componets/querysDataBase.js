const {parse,DB} = require("../../helpers/helpers")
const pool = require("../../database");
const databaseHelper = {}
databaseHelper.add = async (req, res, data)=>{
    const  {nameDatabase, parseDataOriginal, parseDataIDS} = data
    const {proforma_id} = req.params
    //parse IDs from params
    const parseIds = parse.IdForDB([ proforma_id ])
    if(!parseIds.passed){return res.status(parseIds.status).json({message:parseIds.message})}

    // chack if the object data matches
    const parseBody= parse.ObjDB(req.body,parseDataOriginal, parseDataIDS)
    if(!parseBody.passed){return res.status(parseBody.status).json({message:parseBody.message})}

    try{ // try connection
        const querySQL = `INSERT INTO ${nameDatabase} SET ?`
        const response =  DB.responseAdd(await pool.query(querySQL , [parseBody.data]))
        return res.status(response.status).json({message:response.message})
    }catch (E){
        return res.status(400).json({message:"The submitted data cannot be processed"})
    }
}
databaseHelper.update = async (req, res, data) =>{
    const  {nameDatabase, item_id , parseDataOriginal, parseDataIDS} = data
    const {proforma_id} = req.params
    //parse IDs from params
    const parseIds = parse.IdForDB([item_id, proforma_id ])
    if(!parseIds.passed){return res.status(parseIds.status).json({message:parseIds.message})}

    // chack if the object data matches
    const parseBody= parse.ObjDB(req.body,parseDataOriginal, parseDataIDS)
    if(!parseBody.passed){return res.status(parseBody.status).json({message:parseBody.message})}

    try{ // try connection
        const querySQL = `UPDATE ${nameDatabase} set ? WHERE id =? AND proforma_id = ?`
        const response =  DB.responseUpd(await pool.query(querySQL, [parseBody.data,item_id,proforma_id]))
        console.log(querySQL)
        return res.status(response.status).json({message:response.message})
    }catch (E){
        console.log(E)
        return res.status(400).json({message:"The submitted data cannot be processed"})
    }
}
databaseHelper.getIf = async (req, res, data)=>{
    const  {nameTable} = data
    const {proforma_id} = req.params
    console.log(req.params)
    const parseIds = parse.IdForDB([ proforma_id ])
    if(!parseIds.passed){return res.status(parseIds.status).json({message:parseIds.message})}

    try{ // try connection
        const querySQL = `SELECT * FROM ${nameTable} WHERE proforma_id = ?`
        console.log(querySQL)
        const response  = await pool.query(querySQL , [proforma_id])
        // console.log()
        return res.json(response)
    }catch (E){
        console.log(E)
        return res.status(400).json({message:"The submitted data cannot be processed"})
    }
}
databaseHelper.get = async (req, res, data)=>{
    const {nameTable} = data
    try{ // try connection
        const querySQL = `SELECT * FROM ${nameTable}`
        const response  = await pool.query(querySQL )
        // console.log()
        return res.json(response)
    }catch (E){
        return res.status(400).json({message:"The submitted data cannot be processed"})
    }
}
databaseHelper.delete = async (req, res, data)=>{
    const  {nameDatabase, item_id } = data
    const {proforma_id} = req.params
    //parse IDs from params
    console.log('DELETE BACK esto es el proforma id',req.params)
    //parse IDs from params
    const parseIds = parse.IdForDB([ proforma_id, item_id])
    if(!parseIds.passed){return res.status(parseIds.status).json({message:parseIds.message})}
    try{ // try connection
        const querySQL = `DELETE FROM ${nameDatabase} WHERE proforma_id = ? AND id=?`
        const response =  DB.responseDel(await pool.query(querySQL , [ proforma_id, item_id]))
        return res.status(response.status).json({message:response.message})
    }catch (E){
        return res.status(400).json({message:"The submitted data cannot be processed"})
    }
}

module.exports = databaseHelper;