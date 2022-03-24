const case_= {}
const databaseHelper = require("./querysDataBase");


const nameDatabase = 'case'
const parseDataOriginal = ["name","dol","sol","item_active","link"]
const parseDataIDs = ["proforma_id", "brand","store"]

case_.add = async (req, res) =>{
    const data = {
        nameDatabase,
        parseDataOriginal ,
        parseDataIDs,
    }
    return databaseHelper.add(req,res, data )
}
case_.getIf = async (req, res) =>{
    const data = {
        nameDatabase,
    }
    return databaseHelper.getIf(req,res, data )
}
case_.update = async (req, res) =>{
    const { case_id } = req.params
    const data = {
        nameDatabase,
        item_id : case_id,
        parseDataOriginal,
        parseDataIDs,
    }
    return databaseHelper.update(req,res, data )
}
case_.delete = async (req, res) =>{
    const {case_id} = req.params
    const data = {
        nameDatabase,
        item_id : case_id,
    }
    return databaseHelper.delete(req,res, data )
}
module.exports = case_;