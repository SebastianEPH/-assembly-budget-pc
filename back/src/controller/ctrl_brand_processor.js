const brand_processor = {}
const pool = require('../database')


brand_processor.get = async (req, res)=>{

    const brand = await pool.query('SELECT * from processor_brand')
    console.log('esntro al de brand_processor ' )
    console.table(brand)
    res.json(brand)

}
brand_processor.post= async(req, res)=>{
    res.json({
        ok:'ok pex brand_processor processor'
    })
}

module.exports =  brand_processor;