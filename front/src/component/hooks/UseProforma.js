import {useState} from "react";
import axios from "../../config/axios";
const connectionAPI =  axios.create({
    //baseURL: "http://127.0.0.1:5000/api/"
    baseURL: "https://assembly-budget-node.herokuapp.com/api/"

})

export const UseProforma = (proforma_id)=>{

    // disk
    const [disk, setDisk] = useState([]);

    // disk type
    const [diskType, setDiskType] = useState([]);

    // disk size
    const [diskSize, setDiskSize] = useState([]);

    // cabinet
    const [cabinet, setCabinet] = useState([]);

    // display
    const [display, setDisplay] = useState([]);

    // display Panel
    const [displayPanel, setDisplayPanel] = useState([]);

    // display Size
    const [displaySize, setDisplaySize] = useState([]);

    // keyboard
    const [keyboard, setKeyboard] = useState([]);

    // mouse
    const [mouse, setMouse] = useState([]);


    // graphics card
    const [graphicscard, setGraphicscard] = useState([]);

    // processor
    const [processor, setProcessor] = useState([]);
    const [processorType, setProcessorType] = useState([]);

    // powersupply
    const [powersupply, setPowersuppy] = useState([]);
    const [powersupplyCertificate, setPowersuppyCertificate] = useState([]);
    const [powersupplyWatts, setPowersuppyWatts] = useState([]);

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

    const loadDisk = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/disk`)
            .then(({data})=>setDisk(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }

    const loadDiskType = async () =>{
        await connectionAPI.get(`/disk_type`)
            .then(({data})=>setDiskType(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadDiskSize = async () =>{
        await connectionAPI.get(`/disk_size`)
            .then(({data})=>setDiskSize(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadCabinet = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/cabinet`)
            .then(({data})=>setCabinet(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadDisplay = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/display`)
            .then(({data})=>setDisplay(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadDisplayPanel = async () =>{
        await connectionAPI.get(`/display_panel`)
            .then(({data})=>setDisplayPanel(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadDisplaySize = async () =>{
        await connectionAPI.get(`/display_size`)
            .then(({data})=>setDisplaySize(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadKeyboard = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/keyboard`)
            .then(({data})=>setKeyboard(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadMouse = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/mouse`)
            .then(({data})=>setMouse(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadGraphicscard = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/graphicscard`)
            .then(({data})=>setGraphicscard(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadPowersupply = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/powersupply`)
            .then(({data})=>setPowersuppy(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadPowersupplyCertificate = async () =>{
        await connectionAPI.get(`/powersupply_certificate`)
            .then(({data})=>setPowersuppyCertificate(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadPowersupplyWatts = async () =>{
        await connectionAPI.get(`/powersupply_watts`)
            .then(({data})=>setPowersuppyWatts(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
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
        displayPanel,
        displaySize,
        loadDisplayPanel,loadDisplaySize,
        disk, setDisk,
        diskType, setDiskType,
        diskSize, setDiskSize,
        loadDisk,loadDiskType,loadDiskSize,
        loadCabinet, cabinet,
        loadDisplay, display,
        loadKeyboard, keyboard,
        loadMouse, mouse,
        loadGraphicscard ,graphicscard,
        powersupplyWatts,powersupplyCertificate,powersupply,
        loadPowersupply,loadPowersupplyCertificate,loadPowersupplyWatts,
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


