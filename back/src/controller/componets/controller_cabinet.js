const cabinet= {}
const databaseHelper = require("../../helpers/querysDataBase");


const nameDatabase = 'cabinet'
const parseDataOriginal = ["name","dol","sol","item_active","link"]
const parseDataIDs = ["proforma_id", "brand","store"]

cabinet.add = async (req, res) =>{
    const data = {
        nameDatabase,
        parseDataOriginal ,
        parseDataIDs,
    }
    return databaseHelper.add(req,res, data )
}
cabinet.getIf = async (req, res) =>{
    const data = {
        nameDatabase,
    }
    return databaseHelper.getIf(req,res, data )
}
cabinet.update = async (req, res) =>{
    const { cabinet_id } = req.params
    const data = {
        nameDatabase,
        item_id : cabinet_id,
        parseDataOriginal,
        parseDataIDs,
    }
    return databaseHelper.update(req,res, data )
}
cabinet.delete = async (req, res) =>{
    const {cabinet_id} = req.params
    const data = {
        nameDatabase,
        item_id : cabinet_id,
    }
    return databaseHelper.delete(req,res, data )
}
module.exports = cabinet;