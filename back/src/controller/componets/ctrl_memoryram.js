const memoryram = {}
const pool = require('../../database')
const {parse} = require("../../helpers/helpers")

memoryram.add = async (req, res) =>{

}
memoryram.update=async (req, res) =>{
    const {memoryram_id, proforma_id } = req.params

    //parse IDs from params
    const parseIds = parse.IdForDB([memoryram_id, proforma_id ])
    if(!parseIds.passed){return res.status(parseIds.status).json({message:parseIds.message})}







     console.log("no debeia leerse")

    //
   //  await helpers.parseIdForDB([memoryram_id, proforma_id]).then(
   //      e=>{ console.log("finalizar programa") ; }
   //  )
   //  await console.log('no debe ejecutarse esto ')
    await  res.status(200).json({message:"no deberia leerse "})
    // then(()=>{
    //     // return helpers.parse.isObjEmpty(req.body)
    //     return helpers.parse.ObjDB({},["name","dol","sol"], ["type","size", "freq","brand"])
    //     })
    //     .then((async(data )=>{
    //         console.log("llegó antes de la consulta ")
    //         console.table(data)
    //         return await pool.query('UPDATE memory_ram set ? WHERE id =? AND proforma_id = ? ', [data,memoryram_id,proforma_id])
    //     }))
    //     .then((response)=>{
    //         console.log("estos son los datos dentro de then exito en la consulta")
    //             if(response.changedRows === 1 ){
    //                 console.log('esto es update del back , se guardó con exito ')
    //                 return res.status(200).json({message:"se guardó con exito "})
    //             }else{
    //                 console.log("No hubo datos que actualizar")
    //                 return res.status(204).json({message:"No hubo cambios que actualizar"})
    //             }
    //         }
    //     )
    //     .catch(err=> {
    //         console.log(err)
    //         return res.status(402).json({message: err})
    //     })
    //
    // if(true){ //req.body ==={}
    //     console.log("no se guardó los datos por que los datos están vacios")
    //    return res.status(404).json({message:"Error, los datos están vacios"})
    // }
    // res.status(200).json({message:"todo ok dice desde el server "})
    // // console.log("datos de body",req.body)
    // //
    // //
    // const data = helpers.parse.ObjDB(req.body,["name","dol","sol"], ["type","size", "freq","brand"])
    // console.log("luego del parse data ",data)
    // // console.log("body ",req.body)
    // // console.log("data parse ",data)
    // // try{
    //
    //
    //
    // const  update = await pool.query('UPDATE memory_ram set ? WHERE id =? AND proforma_id = ? ', [data,memoryram_id,proforma_id],
    // (err, message)=>{
    //        if(err){
    //            console.log("hubo un error pex", err)
    //        }
    //        if(message){
    //            console.log("Se guardó los datos con exito ", message)
    //        }
    //    }
    // )

        // console.log(update)
            // .then((e)=>{
            //     console.log("estos son los datos dentro de then exito en la consulta",e)
            //     if(e.changedRows === 1 ){
            //         console.log('esto es update del back , se guardó conexito ',update)
            //         return res.json({message:"se guardó con exito "})
            //     }else{
            //         console.log("No hubo datos que actualizar")
            //         return res.status(204).json({message:"No hay cambios que actualizar"})
            //     }
            //
            // })
            // .catch((e)=> {
            //     // console.log("error dentro del servidor ")
            //     console.log("hubo un error al guardar los datos ", e)
            //     return res.status(404).json({message:"No se guardaron los datos en la base de datos"})
            //
            //     // return res.status(400).json({message:"Hubo un error en el servidor"})
            // })
        //await pool.query('UPDATE question set ? WHERE que_id = ?', [data, id])
        // if(update.affectedRows){
        //
        //
        // }else{
        //     console.log("hubo un error al guardar los datos ")
        //     return res.status(404).json({message:"No se guardaron los datos en la base de datos"})
        // }
    // }catch (e){
    //     // console.log("hubo un error en el servidor",e)
    //     return res.status(400).json({message:"Hubo un error en el servidor"})
    // }

}





module.exports  =  memoryram;