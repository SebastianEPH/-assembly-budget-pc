const brand = {}
const pool = require('../database')


brand.get = async (req, res, DB)=>{

    const brand = await pool.query('SELECT * from processor_brand')
    console.log('esntro al de brand ' +
        '/?  ')
    console.table(brand)
    res.json(brand)

}
brand.post= async(req, res)=>{
    res.json({
        ok:'ok pex brand processor'
    })
}

module.exports =  brand;