import {useState} from "react";
import pool from "../config/connection"
export const UseProforma = (proforma_id)=>{
    const [memoryRAM, setMemoryRAM] = useState([]);
    const [memoryRAMType, setMemoryRAMType] = useState([]);
    const [memoryRAMFrequency, setMemoryRAMFrequency] = useState([]);
    const [memoryRAMSize, setMemoryRAMSize] = useState([]);
    const [brand, setBrand] = useState([]);
    const [store, setStore] = useState([]);


    console.log("id dentro de useProforma",proforma_id)

    const loadMemoryRAM = async () =>{
        console.log("entro al load ram")
        await pool.getProforma(proforma_id)
            .then(data=>{
                console.log("obteniendo datos del server",data.memory_ram)
                setMemoryRAM(data.memory_ram)
                // console.log('dentro de la consulta, supuestamente ya puestos  ', memoryRAM,)
                setMemoryRAMType(data.memory_ram_type)
                setMemoryRAMFrequency(data.memory_ram_frequency)
                setMemoryRAMSize(data.memory_ram_size)
                // console.log('Se establecieron los datos de Memory-RAM id es: ', proforma_id)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadStore = async() =>{
        await pool.getStore()
            .then((data)=>setStore(data))
            .catch((err)=>console.log("there Was an Error getting the data ",err))
    }
    const loadBrand = async() =>{
        await pool.getBrand()
            .then((data)=>setBrand(data))
            .catch((err)=>console.log("there Was an Error getting the data ",err))
    }

    return {
        memoryRAM,
        memoryRAMType,
        memoryRAMFrequency,
        memoryRAMSize,
        loadMemoryRAM,
        loadBrand,
        loadStore,
        brand,
        store
    }
}


