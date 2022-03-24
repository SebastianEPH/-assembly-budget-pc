const brand = {}

const pool = require('../database')


brand.get = async (req, res)=>{

    const brand = await pool.query('SELECT * from brand')
    // console.log('esntro al de brand ' )
    // console.log('esto es lo que recive el bran: ',brand)

    console.table(brand)
    res.json(brand)

}
brand.post= async(req, res)=>{
    res.json({
        ok:'ok pex brand processor'
    })
}

module.exports =  brand;