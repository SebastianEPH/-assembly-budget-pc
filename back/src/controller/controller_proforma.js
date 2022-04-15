const proforma = {}
const pool = require('../database')
const {parse, DB} = require("../helpers/helpers");


const getMemoryRam = async (id) =>{
    return await pool.query(
        ' SELECT ' +
        ' memory_ram.name, ' +
        ' memory_ram.sol, ' +
        ' memory_ram.dol, ' +
        ' memory_ram_size.name as "size", ' +
        ' memory_ram_type.name as "type", ' +
        ' memory_ram_frequency.name as "frequency", ' +
        ' brand.name as "brand" ' +
        ' FROM memory_ram ' +
        ' LEFT JOIN memory_ram_size ON memory_ram.size = memory_ram_size.id  ' +
        ' LEFT JOIN memory_ram_type ON memory_ram.type = memory_ram_type.id  ' +
        ' LEFT JOIN memory_ram_frequency ON memory_ram.freq = memory_ram_frequency.id  ' +
        ' LEFT JOIN brand ON memory_ram.brand = brand.id  ' +
        ' WHERE proforma_id = ? AND memory_ram.item_active = 1 ',[id]) // LEFT
}
const getMotherboard = async (id) =>{
    return await pool.query(
        ' SELECT ' +
        ' motherboard.name, ' +
        ' motherboard.sol, ' +
        ' motherboard.dol, ' +
        ' processor_type.name as "type", ' +
        ' brand.name as "brand" ' +
        ' FROM motherboard ' +
        ' LEFT JOIN processor_type ON motherboard.type = processor_type.id  ' +
        ' LEFT JOIN brand ON motherboard.brand = brand.id  ' +
        ' WHERE proforma_id = ? AND motherboard.item_active = 1 ',[id]) // LEFT
}

const getPowerSupply = async (id) =>{
    const table = "powersupply"
    return await pool.query( `SELECT 
     ${table}.name ,
     ${table}.sol,
     ${table}.dol,
     ${table}_certificate.name as "certificate"  ,
     ${table}_watts.name as "watts" ,
     brand.name as "brand" 
     FROM ${table}
     LEFT JOIN ${table}_certificate ON  ${table}.certificate =  ${table}_certificate.id
     LEFT JOIN ${table}_watts ON ${table}.watts = ${table}_watts.id
     LEFT JOIN brand ON ${table}.brand = brand.id
     WHERE proforma_id = ? AND ${table}.item_active = 1`,[id])

}
const getProcessor = async (id) =>{
    const table = "processor"
    return await pool.query( `SELECT 
     ${table}.name ,
     ${table}.sol,
     ${table}.dol,
     ${table}_type.name as "brand" 
     FROM ${table}
     LEFT JOIN ${table}_type ON  ${table}.brand =  ${table}_type.id
     WHERE proforma_id = ? AND ${table}.item_active = 1`,[id])

}
const getDisplay = async (id) =>{
    const table = "display"
    return await pool.query( `SELECT 
     ${table}.name ,
     ${table}.sol,
     ${table}.dol,
     ${table}_panel.panel as "panel" , 
     ${table}_size.size as "size" , 
     brand.name as "brand"  
     FROM ${table} 
     LEFT JOIN ${table}_panel ON  ${table}.panel =  ${table}_panel.id 
     LEFT JOIN ${table}_size ON  ${table}.size =  ${table}_size.id 
     LEFT JOIN brand ON ${table}.brand = brand.id 
     WHERE proforma_id = ? AND ${table}.item_active = 1`,[id])
}
const getDisk = async (id) =>{
    const table = "disk"
    return await pool.query( `SELECT 
     ${table}.name ,
     ${table}.sol,
     ${table}.dol,
     ${table}_type.type as "type" , 
     ${table}_size.size as "size" , 
     brand.name as "brand"  
     FROM ${table} 
     LEFT JOIN ${table}_type ON  ${table}.type =  ${table}_type.id 
     LEFT JOIN ${table}_size ON  ${table}.size =  ${table}_size.id 
     LEFT JOIN brand ON ${table}.brand = brand.id 
     WHERE proforma_id = ? AND ${table}.item_active = 1`,[id])
}
const getCabinet = async (id) =>{
    const table = "cabinet"
    return await pool.query( `SELECT 
     ${table}.name ,
     ${table}.sol,
     ${table}.dol,
     brand.name as "brand"  
     FROM ${table} 
     LEFT JOIN brand ON ${table}.brand = brand.id 
     WHERE proforma_id = ? AND ${table}.item_active = 1`,[id])
}
const getMouse= async (id) =>{
    const table = "mouse"
    return await pool.query( `SELECT 
     ${table}.name ,
     ${table}.sol,
     ${table}.dol,
     brand.name as "brand"  
     FROM ${table} 
     LEFT JOIN brand ON ${table}.brand = brand.id 
     WHERE proforma_id = ? AND ${table}.item_active = 1`,[id])
}
const getKeyboard= async (id) =>{
    const table = "keyboard"
    return await pool.query( `SELECT 
     ${table}.name ,
     ${table}.sol,
     ${table}.dol,
     brand.name as "brand"  
     FROM ${table} 
     LEFT JOIN brand ON ${table}.brand = brand.id 
     WHERE proforma_id = ? AND ${table}.item_active = 1`,[id])
}
const getGraphicscard = async (id) =>{
    const table = "graphicscard"
    return await pool.query( `SELECT 
     ${table}.name ,
     ${table}.sol,
     ${table}.dol,
     brand.name as "brand"  ,
     memory_ram_size.name as "size"
     FROM ${table} 
     LEFT JOIN brand ON ${table}.brand = brand.id 
     LEFT JOIN memory_ram_size ON ${table}.memory = memory_ram_size.id 
     WHERE proforma_id = ? AND ${table}.item_active = 1`,[id])
}
proforma.removeOnly = async (req, res)=>{
    res.json({message:"se elimino correctamente"})

    const {id} = req.params
    //parse IDs from params
    console.log('DELETE BACK esto es el proforma id',req.params)
    //parse IDs from params
    const parseIds = parse.IdForDB([id])
    if(!parseIds.passed){return res.status(parseIds.status).json({message:parseIds.message})}
    console.log("a ver kldsjkldkljdsf k dk k d")
    try{ // try connection
        const response =  await pool.query('DELETE FROM proforma WHERE id = ?;',[id])
        console.log("response ",response)
        return res.status(response.status).json({message:response.message})
    }catch (E){
        return res.status(400).json({message:"The submitted data cannot be processed"})
    }

}
proforma.getAll = async (req, res)=>{ // esto es de la vista principal, no es de proyectos idividuales

    const proforma = await pool.query('SELECT id,name, date_created, date_update from proforma ORDER BY id ASC')
    let finish = []
    for (let i = 0; i < proforma .length; i++) {
        const obj = {}
        obj.name = proforma[i].name
        obj.id = proforma[i].id
        obj.date_created = proforma[i].date_created
        obj.date_update = proforma[i].date_update
        obj.display = await getDisplay(proforma[i].id)
        obj.processor = await getProcessor(proforma[i].id)
        obj.graphicscard = await getGraphicscard(proforma[i].id)
        obj.disk = await getDisk(proforma[i].id)
        obj.memory_ram = await getMemoryRam(proforma[i].id)
        obj.motherboard = await getMotherboard(proforma[i].id)
        obj.powersupply = await getPowerSupply(proforma[i].id)
        obj.mouse= await getMouse(proforma[i].id)
        obj.keyboard= await getKeyboard(proforma[i].id)
        obj.cabinet = await getCabinet(proforma[i].id)

        finish.push(obj)
    }

    await console.log("finish", finish)

     return await res.json(finish)

}
proforma.get_only = async (req, res)=>{ // esto es de la vista principal, no es de proyectos idividuales
    const {id} = req.params

    console.log(req.params)
    console.log('entro:propforma get  ')
     // está detectando store como un i
    // verificar el id, por que hay problemas si no mandas un id que no se aun numero .

    const proforma = await pool.query('SELECT * from proforma where id = ? ', [id])

    //console.log(proforma)
    //array1.forEach(element => console.log(element));

    const processor = await pool.query('SELECT * from processor where proforma_id = ?',id)
    const motherboard = await pool.query('SELECT * from motherboard where proforma_id = ? ',[id])
    const memory_ram = await pool.query('SELECT * from memory_ram where proforma_id = ? ',[id])
    const memory_ram_type = await pool.query('SELECT * from memory_ram_type ')
    const memory_ram_size = await pool.query('SELECT * from memory_ram_size ')
    const memory_ram_frequency = await pool.query('SELECT * from memory_ram_frequency ')

    console.table(processor)
    console.table(motherboard)
    console.table(memory_ram)
    proforma[0].processor =  processor
    proforma[0].motherboard = motherboard
    proforma[0].memory_ram = memory_ram
    proforma[0].memory_ram_size = memory_ram_size
    proforma[0].memory_ram_type = memory_ram_type
    proforma[0].memory_ram_frequency = memory_ram_frequency

    res.json(proforma)
}
proforma.add = async (req, res)=>{
    const parseBody= req.body.name
    if(parseBody){
        try{ // try connection
            const querySQL = `INSERT INTO proforma SET ?`
            const response =  DB.responseAdd(await pool.query(querySQL , [{name:req.body.name}]))
            console.log(response)
            return res.status(response.status).json({message:response.message})
        }catch (E){
            console.log(E)
            return res.status(400).json({message:"The submitted data cannot be processed"})
        }
    }else{
        return res.status(400).json({message:"name is empty"})
    }
}

module.exports =  proforma;


