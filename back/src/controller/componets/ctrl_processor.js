const processor= {}
const pool = require('../../database')

const model_processortttt = {
        proforma_id:null,
        name:null,
        store_id:null,
        link:null,
        active:null,
        price_sol:null,
        price_dol:null
}
const me = Object.create({

    proforma_id:null,
    name:null,
    store_id:null,
    link:null,
    active:null,
    price_sol:null,
    price_dol:null
});


function model_processor (proforma_id , name,store_id ,link ,active,price_dol,price_sol) {
    this.proforma_id = proforma_id || null;
    this.name = name || null;
    this.store_id = store_id || null;
    this.link = link || null;
    this.active = active || null;
    this.price_dol = price_dol || null;
    this.price_sol = price_sol || null;

    return{
        proforma_id:this.proforma_id,
        name:this.name,
        store_id:this.store_id,
        link:this.link,
        active:this.active,
        brand_id:this.brand_id = active || null,
        price_dol:this.price_dol,
        price_sol:this.price_sol

    }
}


processor.add = async (req, res) =>{
    console.log("post 1 start ")
    console.log(req.body)
    console.log(req.params)
    console.log("antes params ")
    const {proforma_id} = req.params
    const {
        name,
        store_id,
        link,
        active,
        brand_id,
        price_dol,
        price_sol
    } = req.body

    const me = model_processor(
        proforma_id,
        name,
        store_id,
        link,
        active,
        brand_id,
        price_dol,
        price_sol
    )

    console.table(me)
    console.log("antes me  ")

    console.log(model_processor)
    console.log("post 1 finish ")
    await pool.query('INSERT INTO processor SET ?', [me])

}
processor.update = async (req, res) =>{
    console.log("put")
}
processor.get = async (req, res) =>{
    console.log("get")
}
processor.getOnly = async (req, res) =>{
    console.log("getonly")
}


module.exports = processor;