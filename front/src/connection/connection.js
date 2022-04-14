import connectionAPI from "./axios";
const pool = {}

pool.getProforma = async (id)=>  {
    console.log('consultado API [proforma]')
    const query = await connectionAPI.get(`/proforma/${id}`)
    const json = query.data
    return json[0]
}
pool.hola = async (id)=>{
    console.log('consultado API [proforma]')
    const queryProjects = await connectionAPI.get(`/proforma/${id}`)

    const json = queryProjects.data

    console.table("respuesta query",queryProjects)

    console.log(json[0])


    return json[0]
}

export default pool;
