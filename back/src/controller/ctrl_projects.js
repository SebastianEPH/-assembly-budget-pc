const  project = {}


const m_project= require ('../models/model_project')


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

    //console.log(req.body) // imprime lo que el ususario envio al body
    const {name, details, date, img } =  req.body;
    const project= new m_project({
        name,
        details,
        date,
        img,
    })
    await project.save();
    console.log(project)


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