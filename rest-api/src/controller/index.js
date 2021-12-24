const  project = {}


const taks= require ('../models/assambly')


project.get = async (req, res)=>{ // esto es de la vista principal, no es de proyectos idividuales

    const fg = await taks.find()
    console.log(fg)
    res.json(fg)

}
project.getOnly = async (req, res)=>{

    const only = await taks.findById(req.params.id)

    res.json(only);

}
project.add= async (req, res)=>{

    //console.log(req.body) // imprime lo que el ususario envio al body
    const {nameProject, description } =  req.body;
    const guarda = new taks({
        nameProject,
        description
    })
    await guarda.save();
    console.log(guarda)


    res.json({
        status: 'saved ok '
    })
}
project.update = async (req, res)=>{
    const {nameProject,description} =  req.body
    const newTask = {nameProject,description}

    await taks.findByIdAndUpdate(req.params.id, newTask)
    console.log(req.params.id)

    res.json({
        status: 'Update ok'
    })

}
project.delete = async(req, res)=>{

    await taks.findByIdAndDelete(req.params.id)
    res.json({
        status: 'delete ok '
    })

}



module.exports =  project;