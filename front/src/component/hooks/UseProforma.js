import {useState} from "react";
import axios from "../../config/axios";
const connectionAPI =  axios.create({
    baseURL: "http://127.0.0.1:5000/api/"

})

export const UseProforma = (proforma_id)=>{
    // processor
    const [processor, setProcessor] = useState([]);
    const [processorType, setProcessorType] = useState([]);

    // motherboard
    const [motherboard, setMotherboard] = useState([]);

    // memory ram
    const [memoryRAM, setMemoryRAM] = useState([]);
    const [memoryRAMType, setMemoryRAMType] = useState([]);
    const [memoryRAMFrequency, setMemoryRAMFrequency] = useState([]);
    const [memoryRAMSize, setMemoryRAMSize] = useState([]);
    // other
    const [brand, setBrand] = useState([]);
    const [store, setStore] = useState([]);

    const loadMotherboard = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/motherboard`)
            .then(({data})=>setMotherboard(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadProcessor = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/processor`)
            .then(({data})=>setProcessor(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadProcessor_type= async () =>{
        await connectionAPI.get(`/processor_type`)
            .then(({data})=>setProcessorType(data))
            .catch((err)=>console.log("there Was an Error getting the data ",err))
    }
    const loadMemoryRAM = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/memoryram`)
            .then(({data})=>setMemoryRAM(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadMemoryRAMType = async () =>{
         await connectionAPI.get(`/memoryram_type`)
            .then(({data})=>setMemoryRAMType(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadMemoryRAMFrequency = async () =>{
        await connectionAPI.get(`/memoryram_frequency`)
            .then(({data})=>setMemoryRAMFrequency(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadMemoryRAMSize = async () =>{
        await connectionAPI.get(`/memoryram_size`)
            .then(({data})=>setMemoryRAMSize(data))
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
        motherboard,
        loadMotherboard,
        processor,
        processorType,
        loadProcessor,loadProcessor_type,
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


