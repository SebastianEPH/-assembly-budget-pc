const keyboard= {}
const databaseHelper = require("../../helpers/querysDataBase");


const nameDatabase = 'keyboard'
const parseDataOriginal = ["name","dol","sol","item_active","link"]
const parseDataIDs = ["proforma_id", "brand","store"]

keyboard.add = async (req, res) =>{
    const data = {
        nameDatabase,
        parseDataOriginal ,
        parseDataIDs,
    }
    return databaseHelper.add(req,res, data )
}
keyboard.getIf = async (req, res) =>{
    const data = {
        nameDatabase,
    }
    return databaseHelper.getIf(req,res, data )
}
keyboard.update = async (req, res) =>{
    const { keyboard_id } = req.params
    const data = {
        nameDatabase,
        item_id : keyboard_id,
        parseDataOriginal,
        parseDataIDs,
    }
    return databaseHelper.update(req,res, data )
}
keyboard.delete = async (req, res) =>{
    const {keyboard_id} = req.params
    const data = {
        nameDatabase,
        item_id : keyboard_id,
    }
    return databaseHelper.delete(req,res, data )
}
module.exports = keyboard;