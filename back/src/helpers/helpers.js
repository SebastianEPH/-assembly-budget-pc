helpers = {}
helpers.parse = {}

helpers.parse.spacesAndLowerCase = text => {
    return  text.replace(/\s+/g, '').toLowerCase().trim()
}
helpers.parse.spaces = text => text.trim()
helpers.parse.lowerCase = text => text.lowerCase()
helpers.ifLength = (text, len= 8) => text.toString().trim().length < len /* Return True o False */

/**
 *
 * @param {Array<String>} words
 * @return {boolean} true if found a word empty
 */
helpers.checkLengthAndUndefined = (words = []) =>{
    // return true, if word empty or
    let state =  false
    // if a word is undefined then state = true
    words.forEach(word =>{
        console.log("read value: ",word)
        if (word === undefined){
            state = true
        }else{
            if(word.toString().trim().length <= 0){
                state = true
            }
        }
    })

    return state
}
// helpers.parseIdForDB = (words = []) =>{
//     let state =  true
//     words.forEach(word =>{
//         if (word === undefined || isNaN(word) || word === null || word.toString().trim().length <= 0){
//             state = false
//         }
//     })
//     return state
// }

/**
 * Verifica si lo que se está enviando es un ID,
 * verifica que no esté vacio, sea nulo o undefined
 * verifica que no sea un texto, si acepta texto con numeros dentro
 * @param {Array<String>} words
 * @return {{state: boolean, message: string}} true if ok
 */
helpers.parse.IdForDB =  (words) =>{
    const obj = {passed:true, message: "the data is id", status:200}

    if(words === null || words === undefined ||words.length === 0 ){
        obj.passed = false
        obj.message = "Error fatal en el server, contacte con el soporte técnico "
        obj.status = 500
    }else{
        words.forEach(word =>{
            if (word === undefined || word === null ){
                obj.passed = false
                obj.message = "El ID del params enviado es undefined o null "
                obj.status = 400
            }else if(isNaN(word)){
                obj.passed = false
                obj.message = "El ID enviado no es un número"
                obj.status = 400
            } else if (word.toString().trim() === ""){
                obj.passed = false
                obj.message = `El ID enviado de la posición ${words.indexOf(word)} está vacio, porfavor actualice la página`
                obj.status = 400
            }
        })
    }

    return obj
}



// helpers.parse.ObjDB = (obj, keysOriginal=[], keysClean=[]) => {
//
//     const newObj = {}
//     Object.entries(obj).forEach(([key, value]) => {
//         /* Si key del objeto tiene como valor vacio, o nulo, no se agrega al objeto final  */
//         keysOriginal.forEach(word=>word === key ?  value.trim() !== ''? newObj[key] = value.trim() : false : false)
//         keysClean.forEach(word=>word === key ?  value.trim() !== ''? newObj[key] = value.trim() : false : false)
//     });
//     return  newObj
// }
/**
 * Parse keys and values from obj for DATABASE
 * verifica que no esten vacios, [no retorna el objeto si está vacio]
 * quita espacios de ambos extremos
 * keyClean : quita espacios en blanco, tabulaciones, saltos de linea
 * convierte a lowercase
 * @param {object} objBody el objeto con todos los datos
 * @param {Array<String>} keysOriginal elimina epacios al comienzo y al final
 * @param {Array<String>} IDs Solo ID, convierte vacios a null
 * @return {Object} retorna un objeto nuevo
 * @constructor
 */
helpers.parse.ObjDB = (objBody, keysOriginal=[], IDs=[]) => {
    const obj = {data: {}, passed:true, message: "parse ok", status:200}

    if(Object.keys(objBody).length === 0){
        obj.passed = false
        obj.message = "Error, no se está enviando nugún valor del, req.body"
        obj.status = 402
        return obj
    }else if(objBody === null || objBody === undefined){
        obj.passed = false
        obj.message = "Error fatal en el server, contacte con el soporte técnico "
        obj.status = 500
        return obj
    }
    Object.entries(objBody).forEach(([key, value]) => {
        keysOriginal.forEach(word=>{
            if(word === key){
                console.log(word, " => ", value)
                obj.data[key]= value === undefined || value=== null? null: value.toString().trim()
            }
        })
        IDs.forEach(word=>{// only Values ForenKey
            if(word === key){
                console.log(word, " => ", value)
                obj.data[key] = value==="" || value === undefined || value=== null || value === 0 ||value ==='0' ? null:value.toString().trim()
            }
        })
    });

    if((Object.keys(obj.data).length === 0)){
        console.log("no hubo ninguna coinicdencia los datos enviados, con los datos que recivve")
        obj.passed = false
        obj.message = "submitted fields do not match database "
        obj.status = 402
    }
    return  obj
}

helpers.responseDB = (response)=>{
    const obj = { passed:true, message: "Database Parse Ok", status:200}
    if(response.serverStatus ===2 ){
        if(response.affectedRows === 0  ){
            obj.passed = false
            obj.message = "You do not have the necessary permissions or the data does not exist"
            obj.status = 406
        }else if(response.affectedRows === 1 || response.insertId !== 0 ){
            obj.passed = true
            obj.message = "Was updated successfully"
            obj.status = 200
        }else{
            console.log("No hubo datos que actualizar")
            obj.passed = true
            obj.message = "no changed to update"
            obj.status = 202
        }
    }
    console.log(obj.message, response)
    return obj
}

helpers.parse.objDBVerifiyCall = (obj, callback) =>{
     if (obj ==={}){
         callback("Usted esta enviando un objeto vacio ")
     }else{
         callback(null, obj)
     }

}

helpers.parse.isObjEmpty= async(obj)=>{
    return obj !== {}
}
helpers.parse.objDBVerifiyPromesa = (obj)=>{
    return new Promise((resolve, reject)=>{
        if (!obj){
            reject("El objeto está vacio")
        }else{
            resolve("todo oexitoso ")

        }
    })
}


helpers.parse.objDBVerifiyAsync = async(obj)=>{
    if (!obj){
        throw new Error("No existe la base de datos ")
    }
    return obj
}



module.exports = helpers;