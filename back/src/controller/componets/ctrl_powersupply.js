const powersupply= {}
const databaseHelper = require("./querysDataBase");


const nameDatabase = 'powersupply'
const parseDataOriginal = ["name","dol","sol","item_active","link"]
const parseDataIDs = ["store","brand","watts","certificate", "proforma_id"]

powersupply.add = async (req, res) =>{
    const data = {
        nameDatabase,
        parseDataOriginal ,
        parseDataIDs,
    }
    return databaseHelper.add(req,res, data )
}
powersupply.getIf = async (req, res) =>{
    const data = {
        nameDatabase,
    }
    return databaseHelper.getIf(req,res, data )
}
powersupply.getWatts = async (req, res)=>{
    const data = {
        nameTable: "powersupply_watts"
    }
    return databaseHelper.get(req,res, data )
}
powersupply.getCertificate = async (req, res)=>{
    const data = {
        nameTable: "powersupply_certificate"
    }
    return databaseHelper.get(req,res, data )
}
powersupply.update = async (req, res) =>{
    const { powersupply_id } = req.params
    const data = {
        nameDatabase,
        item_id : powersupply_id,
        parseDataOriginal,
        parseDataIDs,
    }
    return databaseHelper.update(req,res, data )
}
powersupply.delete = async (req, res) =>{
    const {powersupply_id} = req.params
    const data = {
        nameDatabase,
        item_id : powersupply_id,
    }
    return databaseHelper.delete(req,res, data )
}
module.exports = powersupply;