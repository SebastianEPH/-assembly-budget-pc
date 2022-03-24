const display = {}
const databaseHelper = require("./querysDataBase");


const nameDatabase = 'display'
const parseDataOriginal = ["name","dol","sol","item_active","link"]
const parseDataIDs = ["proforma_id", "brand","store"]

display.add = async (req, res) =>{
    const data = {
        nameDatabase,
        parseDataOriginal ,
        parseDataIDs,
    }
    return databaseHelper.add(req,res, data )
}
display.getIf = async (req, res) =>{
    const data = {
        nameDatabase,
    }
    return databaseHelper.getIf(req,res, data )
}
display.update = async (req, res) =>{
    const { display_id } = req.params
    const data = {
        nameDatabase,
        item_id : display_id,
        parseDataOriginal,
        parseDataIDs,
    }
    return databaseHelper.update(req,res, data )
}
display.delete = async (req, res) =>{
    const {display_id} = req.params
    const data = {
        nameDatabase,
        item_id : display_id,
    }
    return databaseHelper.delete(req,res, data )
}
module.exports = display;