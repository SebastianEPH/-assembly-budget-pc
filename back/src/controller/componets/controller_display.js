const display = {}
const databaseHelper = require("../../helpers/querysDataBase");

const nameDatabase = 'display'
const parseDataOriginal = ["name","dol","sol","item_active","link"]
const parseDataIDs = ["proforma_id", "brand","store","panel","size"]

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
display.getPanel = async (req, res)=>{
    const data = {
        nameTable: "display_panel"
    }
    return databaseHelper.get(req,res, data )
}
display.getSize = async (req, res)=>{
    const data = {
        nameTable: "display_size"
    }
    return databaseHelper.get(req,res, data )
}
module.exports = display;