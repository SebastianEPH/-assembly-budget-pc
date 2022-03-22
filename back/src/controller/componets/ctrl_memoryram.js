const memoryram = {}
const databaseHelper =  require("./querysDataBase")

memoryram.add = async (req, res) =>{
    const data = {
        nameDatabase: 'memory_ram',
        parseDataOriginal: ["name","dol","item_active","sol", "link"],
        parseDataIDS : ["store","type","size", "freq","brand", "proforma_id"],
    }
    return databaseHelper.add(req,res, data )

}
memoryram.getIf = async (req, res) =>{
    const data = {
        nameTable: "memory_ram"
    }
    return databaseHelper.getIf(req,res, data )
}
memoryram.update= async (req, res) =>{
    const {memoryram_id} = req.params
    const data = {
        nameDatabase: 'memory_ram',
        item_id : memoryram_id,
        parseDataOriginal: ["name","dol","item_active","sol", "link"],
        parseDataIDS : ["store","type","size", "freq","brand"],
    }
    return databaseHelper.update(req,res, data )

}
memoryram.delete = async (req, res) =>{
    const {memoryram_id} = req.params
    const data = {
        nameDatabase: 'memory_ram',
        item_id : memoryram_id,
    }
    return databaseHelper.delete(req,res, data )

}
memoryram.getType = async (req, res)=>{
    const data = {
        nameTable: "memory_ram_type"
    }
    return databaseHelper.get(req,res, data )

}
memoryram.getSize = async (req, res)=>{
    const data = {
        nameTable: "memory_ram_size"
    }
    return databaseHelper.get(req,res, data )
}
memoryram.getFrequency= async (req, res)=>{
    const data = {
        nameTable: "memory_ram_frequency"
    }
    return databaseHelper.get(req,res, data )
}
module.exports  =  memoryram;