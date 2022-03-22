const processor= {}
const databaseHelper = require("./querysDataBase");

processor.add = async (req, res) =>{
    const data = {
        nameDatabase: 'processor',
        parseDataOriginal: ["name","dol","sol","item_active","link"],
        parseDataIDS :["brand","store"],
    }
    return databaseHelper.add(req,res, data )
}
processor.getIf = async (req, res) =>{
    const data = {
        nameTable: "processor"
    }
    return databaseHelper.getIf(req,res, data )
}
processor.update = async (req, res) =>{
    const { processor_id } = req.params
    const data = {
        nameDatabase: 'memory_ram',
        item_id : processor_id,
        parseDataOriginal: ["name","dol","item_active","sel", "link"],
        parseDataID : ["store","type","size", "freq","brand"],
    }
    return databaseHelper.update(req,res, data )
}
processor.delete = async (req, res) =>{
    const {processor_id} = req.params
    const data = {
        nameDatabase: 'processor',
        item_id : processor_id,
    }
    return databaseHelper.delete(req,res, data )

}

module.exports = processor;