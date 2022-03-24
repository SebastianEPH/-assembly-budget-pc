const graphicscard= {}
const databaseHelper = require("./querysDataBase");


const nameDatabase = 'graphicscard'
const parseDataOriginal = ["name","dol","sol","item_active","link"]
const parseDataIDs = ["proforma_id", "brand","store"]

graphicscard.add = async (req, res) =>{
    const data = {
        nameDatabase,
        parseDataOriginal ,
        parseDataIDs,
    }
    return databaseHelper.add(req,res, data )
}
graphicscard.getIf = async (req, res) =>{
    const data = {
        nameDatabase,
    }
    return databaseHelper.getIf(req,res, data )
}
graphicscard.update = async (req, res) =>{
    const { graphicscard_id } = req.params
    const data = {
        nameDatabase,
        item_id : graphicscard_id,
        parseDataOriginal,
        parseDataIDs,
    }
    return databaseHelper.update(req,res, data )
}
graphicscard.delete = async (req, res) =>{
    const {graphicscard_id} = req.params
    const data = {
        nameDatabase,
        item_id : graphicscard_id,
    }
    return databaseHelper.delete(req,res, data )
}
module.exports = graphicscard;