const store = {}
const pool = require('../database')


store.get = async (req, res, DB)=>{

    const store = await pool.query('SELECT * from store')
    console.log('esntro al de store ' +
        '/?  ')
    console.log(store)
    res.json(store)

}
store.post = async(req, res)=>{
    res.json({
        ok:'ok pex'
    })
}




module.exports =  store;