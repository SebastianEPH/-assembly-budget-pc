import {useState} from "react";
import pool from "../../config/connection"
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
        const hola = await pool.getMemoryRam(proforma_id)
            .then(({data})=>{
                console.log("data.memory_ram",data)
                setMemoryRAM(data)

            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
        console.log('esto es el hola... ', hola)
    }
    const loadMemoryRAMType = async () =>{
        console.log("entro al load ram")
        const hola = await pool.getMemoryRamType()
            .then(({data})=>{
                console.log("RAM Type=> data only",data)
                setMemoryRAMType(data)

            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
        console.log('esto es el hola... ', hola)
    }
    const loadMemoryRAMFrequency = async () =>{
        console.log("entro al load ram")
        const hola = await pool.getMemoryRamFrequency()
            .then(({data})=>{
                console.log("RAM Frequency=> data only",data)
                console.log("data.memory_ram",data[0])
                setMemoryRAMFrequency(data)

            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
        console.log('esto es el hola... ', hola)
    }
    const loadMemoryRAMSize = async () =>{
        console.log("entro al load ram")
        const hola = await pool.getMemoryRamSize()
            .then(({data})=>{
                console.log(" RAM Size=> data only",data)
                setMemoryRAMSize(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
        console.log('esto es el hola... ', hola)
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
        loadMemoryRAM, loadMemoryRAMType, loadMemoryRAMSize, loadMemoryRAMFrequency,
        loadBrand,
        loadStore,
        brand,
        store
    }
}


