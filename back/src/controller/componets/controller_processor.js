const processor= {}
const databaseHelper = require("../../helpers/querysDataBase");


const nameDatabase = 'processor'
const parseDataOriginal = ["name","dol","sol","item_active","link"]
const parseDataIDs = ["store","type","size", "freq","brand", "proforma_id"]

processor.add = async (req, res) =>{
    const data = {
        nameDatabase,
        parseDataOriginal ,
        parseDataIDs,
    }
    return databaseHelper.add(req,res, data )
}
processor.getIf = async (req, res) =>{
    const data = {
        nameDatabase,
    }
    return databaseHelper.getIf(req,res, data )
}
processor.getType = async (req, res)=>{
    const data = {
        nameTable: "processor_type"
    }
    return databaseHelper.get(req,res, data )
}
processor.update = async (req, res) =>{
    const { processor_id } = req.params
    const data = {
        nameDatabase,
        item_id : processor_id,
        parseDataOriginal,
        parseDataIDs,
    }
    return databaseHelper.update(req,res, data )
}
processor.delete = async (req, res) =>{
    const {processor_id} = req.params
    const data = {
        nameDatabase,
        item_id : processor_id,
    }
    return databaseHelper.delete(req,res, data )
}
module.exports = processor;