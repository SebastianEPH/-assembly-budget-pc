const motherboard= {}
const databaseHelper = require("../../helpers/querysDataBase");


const nameDatabase = 'motherboard'
const parseDataOriginal = ["dol","sol","name","link","item_active"]
const parseDataIDs = ["store","type","brand", "proforma_id"]

motherboard.add = async (req, res) =>{
    const data = {
        nameDatabase,
        parseDataOriginal ,
        parseDataIDs,
    }
    return databaseHelper.add(req,res, data )
}
motherboard.getIf = async (req, res) =>{
    const data = {
        nameDatabase,
    }
    return databaseHelper.getIf(req,res, data )
}
motherboard.update = async (req, res) =>{
    const { motherboard_id } = req.params
    const data = {
        nameDatabase,
        item_id : motherboard_id,
        parseDataOriginal,
        parseDataIDs,
    }
    return databaseHelper.update(req,res, data )
}
motherboard.delete = async (req, res) =>{
    const {motherboard_id} = req.params
    const data = {
        nameDatabase,
        item_id : motherboard_id,
    }
    return databaseHelper.delete(req,res, data )
}
module.exports = motherboard;