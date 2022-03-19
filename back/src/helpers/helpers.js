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
        return obj
    }
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
    return obj
}


helpers.verify = async(params=[],body)=>{

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
 * @param {object} obj el objeto con todos los datos
 * @param {Array<String>} keysOriginal elimina epacios al comienzo y al final
 * @param {Array<String>} IDs Solo ID, convierte vacios a null
 * @return {Object} retorna un objeto nuevo
 * @constructor
 */
helpers.parse.ObjDB = async(obj, keysOriginal=[], IDs=[]) => {
    console.log("el objto mandado es: ",obj)

        // console.log("el objeto estuvo vacio comienzo")
        // throw new Error("El formulario no coincide o está vacio")

    const newObj = {}
    Object.entries(obj).forEach(([key, value]) => {
        /* Si key del objeto tiene como valor vacio, o nulo, no se agrega al objeto final  */
        keysOriginal.forEach(word=>{
            if(word === key){
                console.log(word, " => ", value)
                if(value === undefined || value=== null){
                    newObj[key] = null
                }else{
                    newObj[key] = value
                }

            }
        })
        IDs.forEach(word=>{// only Values ForenKey
            if(word === key){
                console.log(word, " => ", value)
                if(value==="" || value === undefined || value=== null){
                    newObj[key] = null
                }else{
                    newObj[key] = value
                }
            }
        })
    });
    // if (newObj ==={}){
    //     console.log("el objeto estuvo vacio ")
    //     throw("El formulario no coincide o está vacio")
    // }
    return  newObj
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