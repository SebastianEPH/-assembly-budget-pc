import {useState} from "react";
import axios from "../../config/axios";
const connectionAPI =  axios.create({
    baseURL: "http://127.0.0.1:5000/api/"

})

export const UseProforma = (proforma_id)=>{
    // processor
    const [processor, setProcessor] = useState([]);
    // memory ram
    const [memoryRAM, setMemoryRAM] = useState([]);
    const [memoryRAMType, setMemoryRAMType] = useState([]);
    const [memoryRAMFrequency, setMemoryRAMFrequency] = useState([]);
    const [memoryRAMSize, setMemoryRAMSize] = useState([]);
    // other
    const [brand, setBrand] = useState([]);
    const [store, setStore] = useState([]);


    console.log("id dentro de useProforma",proforma_id)

    const loadMemoryRAM = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/memoryram`)
            .then(({data})=>{
                console.log("data.memoryram",data)
                setMemoryRAM(data)

            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadProcessor = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/processor`)
            .then(({data})=>{
                console.log("data.processor",data)
                setProcessor(data)

            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadMemoryRAMType = async () =>{
         await connectionAPI.get(`/memoryram_type`)
            .then(({data})=>{
                console.log("RAM Type=> data only",data)
                setMemoryRAMType(data)

            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadMemoryRAMFrequency = async () =>{
        await connectionAPI.get(`/memoryram_frequency`)
            .then(({data})=>{
                console.log("RAM Frequency=> data only",data)
                console.log("data.memory_ram",data[0])
                setMemoryRAMFrequency(data)

            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadMemoryRAMSize = async () =>{
        await connectionAPI.get(`/memoryram_size`)
            .then(({data})=>{
                console.log(" RAM Size=> data only",data)
                setMemoryRAMSize(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }

    const loadStore = async () =>{
        await connectionAPI.get(`/store`)
            .then(({data})=>setStore(data))
            .catch((err)=>console.log("there Was an Error getting the data ",err))
    }
    const loadBrand = async () =>{
        await connectionAPI.get(`/brand`)
            .then(({data})=>setBrand(data))
            .catch((err)=>console.log("there Was an Error getting the data ",err))
    }
    return {
        processor,
        memoryRAM,
        memoryRAMType,
        memoryRAMFrequency,
        memoryRAMSize,
        loadProcessor,
        loadMemoryRAM, loadMemoryRAMType, loadMemoryRAMSize, loadMemoryRAMFrequency,
        loadBrand,
        loadStore,
        brand,
        store
    }
}


