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

    // verify that te req.body not empty
    if(!parse.dataBody(req.body)){
        return res.status(402).json({message:"Error, no se está enviando nugún valor del, req.body"})
    }

    // chack if the object data matches
    const parseBody= parse.ObjDB(req.body,["name","dol","sol"], ["type","size", "freq","brand"])
    if(!parseBody.status){return res.status(parseBody.status).json({message:parseBody.message})}


   try{
       const  update = await pool.query('UPDATE memory_ram set ? WHERE id =? AND proforma_id = ?', [parseBody.data,memoryram_id,proforma_id])
       console.log(update)
       if(update.serverStatus ===2 ){
           if(update.affectedRows === 0  ){
               console.log('Error, usted no tiene los permisos necesarios para modificar tales datos, o el dato no existe',update)
               return res.status(406).json({message:"You do not have the necessary permissions or the data does not exist"})
           }
           if(update.changedRows === 1 && update.changedRows === 1){
               console.log('esto es update del back , se guardó conexito ',update)
               return res.status(200).json({message:"Was updated successfully"})
           }else{
               console.log("No hubo datos que actualizar")
               return res.status(202).json({message:"No changes to update "})
           }
       }
   }catch{
        console.log('error fatal en la consulta ')
       return res.status(400).json({message:"The submitted data cannot be processed"})
   }

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