import {useState} from "react";
import connectionAPI from "../../connection/axios";
export const UseProforma = (proforma_id)=>{

    // disk
    const [disk, setDisk] = useState([]);
    const [statusDisk, setStatusDisk] = useState(false); // true if query to database

    // disk type
    const [diskType, setDiskType] = useState([]);

    // disk size
    const [diskSize, setDiskSize] = useState([]);

    // cabinet
    const [cabinet, setCabinet] = useState([]);
    const [statusCabinet, setStatusCabinet] = useState(false); // true if query to database
    // display
    const [display, setDisplay] = useState([]);
    const [statusDisplay, setStatusDisplay] = useState(false); // true if query to database
    // display Panel
    const [displayPanel, setDisplayPanel] = useState([]);

    // display Size
    const [displaySize, setDisplaySize] = useState([]);

    // keyboard
    const [keyboard, setKeyboard] = useState([]);
    const [statuskeyboard, setStatusKeyboard] = useState(false); // true if query to database
    // mouse
    const [mouse, setMouse] = useState([]);
    const [statusMouse, setStatusMouse] = useState(false); // true if query to database

    // graphics card
    const [graphicscard, setGraphicscard] = useState([]);
    const [statusGraphicscard, setStatusGraphicscard] = useState(false); // true if query to database

    // processor
    const [processor, setProcessor] = useState([]);
    const [statusProcessor, setStatusProcessor] = useState(false); // true if query to database
    const [processorType, setProcessorType] = useState([]);

    // powersupply
    const [powersupply, setPowersuppy] = useState([]);
    const [statusPowersupply, setStatusPoersupply] = useState(false); // true if query to database
    const [powersupplyCertificate, setPowersuppyCertificate] = useState([]);
    const [powersupplyWatts, setPowersuppyWatts] = useState([]);

    // motherboard
    const [motherboard, setMotherboard] = useState([]);
    const [statusMotherboard, setStatusMotherboard] = useState(false); // true if query to database

    // memory ram
    const [memoryRAM, setMemoryRAM] = useState([]);
    const [statusMemoryRAM, setStatusMemoryRAM] = useState(false); // true if query to database
    const [memoryRAMType, setMemoryRAMType] = useState([]);
    const [memoryRAMFrequency, setMemoryRAMFrequency] = useState([]);
    const [memoryRAMSize, setMemoryRAMSize] = useState([]);
    // other
    const [brand, setBrand] = useState([]);
    const [store, setStore] = useState([]);

    const loadDisk = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/disk`)
            .then(({data})=>{
                setDisk(data)
                setStatusDisk(true)
            })
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
            .then(({data})=>{
                setCabinet(data)
                setStatusCabinet(true)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadDisplay = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/display`)
            .then(({data})=>{
                setDisplay(data)
                setStatusDisplay(true)
            })
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
            .then(({data})=>{
                setKeyboard(data)
                setStatusKeyboard(true)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadMouse = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/mouse`)
            .then(({data})=>{
                setMouse(data)
                setStatusMouse(true)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadGraphicscard = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/graphicscard`)
            .then(({data})=>{
                setGraphicscard(data)
                setStatusGraphicscard(true)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadPowersupply = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/powersupply`)
            .then(({data})=>{
                setPowersuppy(data)
                setStatusPoersupply(true)
            })
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
            .then(({data})=>{
                setMotherboard(data)
                setStatusMotherboard(true)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadProcessor = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/processor`)
            .then(({data})=>{
                setProcessor(data)
                setStatusProcessor(true)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const loadProcessor_type= async () =>{
        await connectionAPI.get(`/processor_type`)
            .then(({data})=>setProcessorType(data))
            .catch((err)=>console.log("there Was an Error getting the data ",err))
    }
    const loadMemoryRAM = async () =>{
        await connectionAPI.get(`/proforma/${proforma_id}/memoryram`)
            .then(({data})=>{
                setMemoryRAM(data)
                setStatusMemoryRAM(true)
            })
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
        statusMotherboard,
        statusPowersupply,
        statusProcessor,
        statusGraphicscard,
        statusMouse,
        statusMemoryRAM,
        statuskeyboard,
        statusDisplay,
        statusDisk,
        statusCabinet,
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


