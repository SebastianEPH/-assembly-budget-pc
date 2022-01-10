const  project = {}


const m_project= require ('../models/model_project')
const m_proforma= require ('../models/model_proforma_data')

project.get = async (req, res)=>{ // esto es de la vista principal, no es de proyectos idividuales

    const pro = await m_project.find()
    console.log(pro)
    res.json(pro)

}
project.getOnly = async (req, res)=>{

    const only = await m_project.findById(req.params.id)

    res.json(only);

}
project.add= async (req, res)=>{

    console.log(req.body) // imprime lo que el ususario envio al body
    // req.body;

    let project = new m_project({
        name : req.body.name,
        details: req.body.details,
        date: req.body.date,
        img: req.body.img,
        proforma: [
            {
                processor:[
                    {
                        name: 'nombre',
                        brand: "",
                        link: 'esto es un link',
                        store: 'impacto',
                        price_sol: 'ghfh',
                        price_dol: 'jhkghkjg'
                    }
                ]

            }
        ]

    })

    console.log('creuqea q1')
    console.log(project)
    console.log('creuqea q2')

    await project.save()

    res.json({
        status: 'saved ok '
    })
}

project.add_proforma =  async (req, res) =>{
    console.log(req.body) // imprime lo que el ususario envio al body
    // req.body;

    let proforma = new m_proforma({

        processor:[
            {
                name: 'nombre',
                brand: "",
                link: 'esto es un link',
                store: 'impacto',
                price_sol: 'ghfh',
                price_dol: 'jhkghkjg'
            }
        ]
    })

    console.log('proforma 1')
    console.log(proforma)
    console.log('proforma 2')

    //await project.save()
    await m_project.findByIdAndUpdate(req.params.id, proforma)

    res.json({
        status: 'saved ok '
    })
}

project.update = async (req, res)=>{
    const {name, details, date, img} =  req.body
    const newTask = {name, details, date, img}

    await m_project.findByIdAndUpdate(req.params.id, newTask)
    console.log(req.params.id)

    res.json({
        status: 'Update ok'
    })

}
project.delete = async(req, res)=>{

    await m_project.findByIdAndDelete(req.params.id)
    res.json({
        status: 'delete ok '
    })

}



module.exports =  project;