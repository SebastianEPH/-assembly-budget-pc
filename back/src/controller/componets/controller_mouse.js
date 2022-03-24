const mouse= {}
const databaseHelper = require("../../helpers/querysDataBase");


const nameDatabase = 'mouse'
const parseDataOriginal = ["name","dol","sol","item_active","link"]
const parseDataIDs = ["proforma_id", "brand","store"]

mouse.add = async (req, res) =>{
    const data = {
        nameDatabase,
        parseDataOriginal ,
        parseDataIDs,
    }
    return databaseHelper.add(req,res, data )
}
mouse.getIf = async (req, res) =>{
    const data = {
        nameDatabase,
    }
    return databaseHelper.getIf(req,res, data )
}
mouse.update = async (req, res) =>{
    const { mouse_id } = req.params
    const data = {
        nameDatabase,
        item_id : mouse_id,
        parseDataOriginal,
        parseDataIDs,
    }
    return databaseHelper.update(req,res, data )
}
mouse.delete = async (req, res) =>{
    const {mouse_id} = req.params
    const data = {
        nameDatabase,
        item_id : mouse_id,
    }
    return databaseHelper.delete(req,res, data )
}
module.exports = mouse;