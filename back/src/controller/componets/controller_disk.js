const disk= {}
const databaseHelper = require("../../helpers/querysDataBase");


const nameDatabase = 'disk'
const parseDataOriginal = ["name","dol","sol","item_active","link"]
const parseDataIDs = ["proforma_id","size", "type", "brand","store"]

disk.add = async (req, res) =>{
    const data = {
        nameDatabase,
        parseDataOriginal ,
        parseDataIDs,
    }
    return databaseHelper.add(req,res, data )
}
disk.getIf = async (req, res) =>{
    const data = {
        nameDatabase,
    }
    return databaseHelper.getIf(req,res, data )
}
disk.update = async (req, res) =>{
    const { disk_id } = req.params
    const data = {
        nameDatabase,
        item_id : disk_id,
        parseDataOriginal,
        parseDataIDs,
    }
    return databaseHelper.update(req,res, data )
}
disk.delete = async (req, res) =>{
    const {disk_id} = req.params
    const data = {
        nameDatabase,
        item_id : disk_id,
    }
    return databaseHelper.delete(req,res, data )
}
disk.getType = async (req, res)=>{
    const data = {
        nameTable: "disk_type"
    }
    return databaseHelper.get(req,res, data )
}
disk.getSize = async (req, res)=>{
    const data = {
        nameTable: "disk_size"
    }
    return databaseHelper.get(req,res, data )
}
module.exports = disk;