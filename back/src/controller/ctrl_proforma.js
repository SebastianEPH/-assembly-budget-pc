const project = {}
const pool = require('../database')

//const m_project= require ('../models/model_project')
//const m_proforma= require ('../models/model_proforma_data')

project.get = async (req, res)=>{ // esto es de la vista principal, no es de proyectos idividuales

    const proforma = await pool.query('SELECT * from proforma')

    console.log(proforma)
    res.json(proforma)

    // res.json proforma.rows .

}
project.get_only = async (req, res)=>{ // esto es de la vista principal, no es de proyectos idividuales
    const {id} = req.params

    console.log(req.params)
    console.log('entro:?? ')
     // está detectando store como un i


    // verificar el id, por que hay problemas si no mandas un id que no se aun numero .

    const proforma = await pool.query('SELECT * from proforma where id = ? ', [req.params.id])

    //console.log(proforma)
    //array1.forEach(element => console.log(element));

    const processor = await pool.query('SELECT * from processor where proforma_id = ?',id)
    // const pro = await pool.query('SELECT * from proforma RIGHT JOIN processor ON proforma.id = processor.id')

    //let hol = [processor[0],processor[1]]

    //let new_processor = JSON.parse(JSON.stringify(processor))
    //let new_proforma = JSON.parse(JSON.stringify(proforma))
    //new_proforma.processor = new_processor
    //console.log(new_proforma) // esta es la menera correcta
    console.log(processor)
    proforma[0].processor =  processor
    console.log(JSON.stringify(proforma))
    console.table(proforma)
    console.log(Object.values(proforma))
    res.json(proforma)

    // if result  pool.query === 0 return   res.status(404).json({message: "no se encontro la proforma, no existe  "})
    //

    // added try catch, return res.jason(err: error.message)

}

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



module.exports =  project;