const proforma = {}
const pool = require('../database')

//const m_project= require ('../models/model_project')
//const m_proforma= require ('../models/model_proforma_data')

const getMemoryRam = async (id) =>{
    return await pool.query(
        ' SELECT ' +
        ' memory_ram.name, ' +
        ' memory_ram_size.name as "size", ' +
        ' memory_ram_type.name as "type", ' +
        ' memory_ram_frequency.name as "frequency", ' +
        ' brand.name as "brand" ' +
        ' FROM memory_ram ' +
        ' LEFT JOIN memory_ram_size ON memory_ram.size = memory_ram_size.id  ' +
        ' LEFT JOIN memory_ram_type ON memory_ram.type = memory_ram_type.id  ' +
        ' LEFT JOIN memory_ram_frequency ON memory_ram.freq = memory_ram_frequency.id  ' +
        ' LEFT JOIN brand ON memory_ram.brand = brand.id  ' +
        ' WHERE proforma_id = ?  ',[id]) // LEFT
}
const getMotherboard = async (id) =>{
    return await pool.query(
        ' SELECT ' +
        ' motherboard.name, ' +
        ' processor_type.name as "type", ' +
        ' brand.name as "brand" ' +
        ' FROM motherboard ' +
        ' LEFT JOIN processor_type ON motherboard.type = processor_type.id  ' +
        ' LEFT JOIN brand ON motherboard.brand = brand.id  ' +
        ' WHERE proforma_id = ?  ',[id]) // LEFT
}

const getPowerSupply = async (id) =>{
    const table = "powersupply"
    return await pool.query( `SELECT 
     ${table}.name ,
     ${table}_certificate.name as "certificate"  ,
     ${table}_watts.name as "watts" ,
     brand.name as "brand" 
     FROM ${table}
     LEFT JOIN ${table}_certificate ON  ${table}.certificate =  ${table}_certificate.id
     LEFT JOIN ${table}_watts ON ${table}.watts = ${table}_watts.id
     LEFT JOIN brand ON ${table}.brand = brand.id
     WHERE proforma_id = ?`,[id])

}
const getProcessor = async (id) =>{
    const table = "processor"
    return await pool.query( `SELECT 
     ${table}.name ,
     ${table}_type.name as "brand" 
     FROM ${table}
     LEFT JOIN ${table}_type ON  ${table}.brand =  ${table}_type.id
     WHERE proforma_id = ?`,[id])

}
const getDisplay = async (id) =>{
    const table = "display"
    return await pool.query( `SELECT 
     ${table}.name ,
     ${table}_panel.panel as "panel" , 
     ${table}_size.size as "size" , 
     brand.name as "brand"  
     FROM ${table} 
     LEFT JOIN ${table}_panel ON  ${table}.panel =  ${table}_panel.id 
     LEFT JOIN ${table}_size ON  ${table}.size =  ${table}_size.id 
     LEFT JOIN brand ON ${table}.brand = brand.id 
     WHERE proforma_id = ?`,[id])
}
const getDisk = async (id) =>{
    const table = "disk"
    return await pool.query( `SELECT 
     ${table}.name ,
     ${table}_type.type as "type" , 
     ${table}_size.size as "size" , 
     brand.name as "brand"  
     FROM ${table} 
     LEFT JOIN ${table}_type ON  ${table}.type =  ${table}_type.id 
     LEFT JOIN ${table}_size ON  ${table}.size =  ${table}_size.id 
     LEFT JOIN brand ON ${table}.brand = brand.id 
     WHERE proforma_id = ?`,[id])
}
const getCabinet = async (id) =>{
    const table = "cabinet"
    return await pool.query( `SELECT 
     ${table}.name ,
     brand.name as "brand"  
     FROM ${table} 
     LEFT JOIN brand ON ${table}.brand = brand.id 
     WHERE proforma_id = ?`,[id])
}
const getMouse= async (id) =>{
    const table = "mouse"
    return await pool.query( `SELECT 
     ${table}.name ,
     brand.name as "brand"  
     FROM ${table} 
     LEFT JOIN brand ON ${table}.brand = brand.id 
     WHERE proforma_id = ?`,[id])
}
const getKeyboard= async (id) =>{
    const table = "keyboard"
    return await pool.query( `SELECT 
     ${table}.name ,
     brand.name as "brand"  
     FROM ${table} 
     LEFT JOIN brand ON ${table}.brand = brand.id 
     WHERE proforma_id = ?`,[id])
}
const getGraphicscard = async (id) =>{
    const table = "graphicscard"
    return await pool.query( `SELECT 
     ${table}.name ,
     brand.name as "brand"  ,
     memory_ram_size.name as "size"
     FROM ${table} 
     LEFT JOIN brand ON ${table}.brand = brand.id 
     LEFT JOIN memory_ram_size ON ${table}.memory = memory_ram_size.id 
     WHERE proforma_id = ?`,[id])
}

proforma.getAll = async (req, res)=>{ // esto es de la vista principal, no es de proyectos idividuales

    const proforma = await pool.query('SELECT id,name from proforma ORDER BY id ASC')
    let finish = []
    for (let i = 0; i < proforma .length; i++) {
        const obj = {}
        obj.name = proforma[i].name
        obj.display = await getDisplay(proforma[i].id)
        obj.processor = await getProcessor(proforma[i].id)
        obj.graphicscard = await getGraphicscard(proforma[i].id)
        obj.disk = await getDisk(proforma[i].id)
        obj.memory_ram = await getMemoryRam(proforma[i].id)
        obj.motherboard = await getMotherboard(proforma[i].id)
        obj.powersuppy = await getPowerSupply(proforma[i].id)
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

    // const pro = await pool.query('SELECT * from proforma RIGHT JOIN processor ON proforma.id = processor.id')

    //let hol = [processor[0],processor[1]]

    //let new_processor = JSON.parse(JSON.stringify(processor))
    //let new_proforma = JSON.parse(JSON.stringify(proforma))
    //new_proforma.processor = new_processor
    //console.log(new_proforma) // esta es la menera correcta
    //console.log(processor)
    console.table(processor)
    console.table(motherboard)
    console.table(memory_ram)
    proforma[0].processor =  processor
    proforma[0].motherboard = motherboard
    proforma[0].memory_ram = memory_ram
    proforma[0].memory_ram_size = memory_ram_size
    proforma[0].memory_ram_type = memory_ram_type
    proforma[0].memory_ram_frequency = memory_ram_frequency
    //console.log(JSON.stringify(proforma))
    //console.table(proforma)
    //console.log(Object.values(proforma))
    res.json(proforma)


}
// pro




module.exports =  proforma;

//project.getOnly = async (req, res)=>{
//
//    const only = await m_project.findById(req.params.id)
//
//    res.json(only);
//
//}
//project.add= async (req, res)=>{
//
//    console.log(req.body) // imprime lo que el ususario envio al body
//    // req.body;
//
//    let project = new m_project({
//        name : req.body.name,
//        details: req.body.details,
//        date: req.body.date,
//        img: req.body.img,
//        proforma: [
//            {
//                processor:[
//                    {
//                        name: 'nombre',
//                        brand: "",
//                        link: 'esto es un link',
//                        store: 'impacto',
//                        price_sol: 'ghfh',
//                        price_dol: 'jhkghkjg'
//                    }
//                ]
//
//            }
//        ]
//
//    })
//
//    console.log('creuqea q1')
//    console.log(project)
//    console.log('creuqea q2')
//
//    await project.save()
//
//    res.json({
//        status: 'saved ok '
//    })
//}
//
//project.add_proforma =  async (req, res) =>{
//    console.log(req.body) // imprime lo que el ususario envio al body
//    // req.body;
//
//    let proforma = new m_proforma({
//
//        processor:[
//            {
//                name: 'nombre',
//                brand: "",
//                link: 'esto es un link',
//                store: 'impacto',
//                price_sol: 'ghfh',
//                price_dol: 'jhkghkjg'
//            }
//        ]
//    })
//
//    console.log('proforma 1')
//    console.log(proforma)
//    console.log('proforma 2')
//
//    //await project.save()
//    await m_project.findByIdAndUpdate(req.params.id, proforma)
//
//    res.json({
//        status: 'saved ok '
//    })
//}
//
//project.update = async (req, res)=>{
//    const {name, details, date, img} =  req.body
//    const newTask = {name, details, date, img}
//
//    await m_project.findByIdAndUpdate(req.params.id, newTask)
//    console.log(req.params.id)
//
//    res.json({
//        status: 'Update ok'
//    })
//
//}
//project.delete = async(req, res)=>{
//
//    await m_project.findByIdAndDelete(req.params.id)
//    res.json({
//        status: 'delete ok '
//    })
//
//}



