import { useParams, useNavigate} from "react-router-dom";
import React, { useEffect} from "react";

import {ModalAddItem} from "../util/custom/Modal/ModalAddItem";
import { Container, Row} from "react-bootstrap";
import {Processor} from "./Processor";
import toast, { Toaster } from 'react-hot-toast';
import {UseProforma} from "../hooks/UseProforma";
import {ModalDeleteProforma} from "./ModalDeleteProforma";
import connectionAPI from "../../connection/axios";
import {Powersupply} from "./Powersupply";
import {Graphicscard} from "./Graphicscard";
import {Disk} from "./Disk";
import {Display} from "./Display";
import {MemoryRam} from "./MemoryRam";
import {Motherboard} from "./Motherboard";
import {Mouse} from "./Mouse";
import {Cabinet} from "./Cabinet";
import {Keyboard} from "./Keyboard";
import {Loading} from "../util/Loading2";

export default function Proforma(){
    const {proforma_id} = useParams();
    const {
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
        disk,
        diskType,
        diskSize,
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
    } = UseProforma(proforma_id)

    useEffect(async()=>{
        await loadDisplayPanel()
        await loadDisplaySize()
        await loadDisk()
        await loadDiskType()
        await loadDiskSize()
        await loadCabinet()
        await loadDisplay()
        await loadKeyboard()
        await loadMouse()
        await loadGraphicscard()
        await loadPowersupply()
        await loadPowersupplyCertificate()
        await loadPowersupplyWatts()
        await loadMotherboard()
        await loadProcessor()
        await loadProcessor_type()
        await loadMemoryRAM()
        await loadMemoryRAMType()
        await loadMemoryRAMSize()
        await loadMemoryRAMFrequency()
        await loadBrand()
        await loadStore()
    },[])

    const navigate = useNavigate();
    const deleteProforma= async ()=>{
        await connectionAPI.delete(`/proforma/${proforma_id}`)
            .then((m)=>{
                toast.success(m.data.message)
                navigate('/');
            })
            .catch((m)=>{
                toast.error(m.response.data.message)
            })
    }
return(
    <Container>
        <h1 className={"text-center"}>Proforma Mode Editor</h1>

        {/*  Verificar el id , si no es una valido, entonces, mandar un mensaje de error  */}
        <Toaster position={"top-center"} />

        <Row className="justify-content-center">
            <ModalAddItem
                data={{
                    name:"Add Processor" ,
                    information:{
                        store:'',
                        proforma_id,
                        brand:'',
                        link:'',
                        select:'',
                        name:'',
                        item_active:1,
                        sol:0,
                        dol:0
                    },
                    others:{
                        proforma_id,
                        modal:true,
                        dataStore:store,
                        reloadForDB:loadProcessor,
                        processorType
                    },
                    Item: Processor
                }}/>

            <ModalAddItem
                data={{
                    name:"Add Power Supply" ,
                    information:{
                        store:'',
                        proforma_id,
                        brand:'',
                        link:'',
                        watts:'',
                        certificate:'',
                        select:'',
                        name:'',
                        item_active:1,
                        sol:0,
                        dol:0
                    },
                    others:{
                        proforma_id,
                        modal:true,
                        dataStore:store,
                        dataBrand: brand,
                        dataPowersupplyWatts:powersupplyWatts,
                        dataPowersupplyCertificate:powersupplyCertificate,
                        reloadForDB:loadPowersupply,
                    },
                    Item: Powersupply
                }}/>

            <ModalAddItem
                data={{
                    name:"Add Graphics Card" ,
                    information:{
                        store:'',
                        proforma_id,
                        brand:'',
                        link:'',
                        select:'',
                        name:'',
                        item_active:1,
                        sol:0,
                        dol:0
                    },
                    others:{
                        proforma_id,
                        modal:true,
                        dataStore:store,
                        dataSize: memoryRAMSize,
                        dataBrand: brand,
                        reloadForDB:loadGraphicscard,
                    },
                    Item: Graphicscard
                }}/>

            <ModalAddItem
                data={{
                    name:"Add Disk" ,
                    information:{
                        store:'',
                        proforma_id,
                        brand:'',
                        link:'',
                        select:'',
                        name:'',
                        item_active:1,
                        sol:0,
                        dol:0
                    },
                    others:{
                        proforma_id,
                        modal:true,
                        dataStore:store,
                        dataSize: memoryRAMSize,
                        dataBrand: brand,
                        diskType,
                        diskSize,
                        reloadForDB:loadDisk,
                    },
                    Item: Disk
                }}/>
            <ModalAddItem
                data={{
                    name:"Add Display" ,
                    information:{
                        store:'',
                        proforma_id,
                        brand:'',
                        link:'',
                        name:'',
                        item_active:1,
                        sol:0,
                        dol:0
                    },
                    others:{
                        proforma_id,
                        modal:true,
                        dataStore:store,
                        dataBrand: brand,
                        displayPanel,
                        displaySize,
                        reloadForDB:loadDisplay,
                    },
                    Item: Display
                }}/>
            <ModalAddItem
                data={{
                    name:"Add MemoryRam" ,
                    information:{
                        store:'',
                        proforma_id,
                        brand:'',
                        link:'',
                        name:'',
                        item_active:1,
                        sol:0,
                        dol:0
                    },
                    others:{
                        proforma_id,
                        modal:true,
                        dataStore:store,
                        dataType:memoryRAMType,
                        dataFreq:memoryRAMFrequency,
                        dataBrand:brand,
                        dataSize:memoryRAMSize,
                        reloadForDB:loadMemoryRAM,
                    },
                    Item: MemoryRam
                }}/>

            <ModalAddItem
                data={{
                    name:"Add Motherboard" ,
                    information:{
                        store:'',
                        proforma_id,
                        brand:'',
                        link:'',
                        name:'',
                        item_active:1,
                        sol:0,
                        dol:0
                    },
                    others:{
                        proforma_id,
                        modal:true,
                        dataStore:store,
                        dataBrand:brand,
                        processorType,
                        reloadForDB:loadMotherboard,
                    },
                    Item: Motherboard
                }}/>
            <ModalAddItem
                data={{
                    name:"Add Mouse" ,
                    information:{
                        store:'',
                        proforma_id,
                        brand:'',
                        link:'',
                        name:'',
                        item_active:1,
                        sol:0,
                        dol:0
                    },
                    others:{
                        proforma_id,
                        modal:true,
                        dataStore:store,
                        dataBrand:brand,
                        reloadForDB:loadMouse,
                    },
                    Item: Mouse
                }}/>
            <ModalAddItem
                data={{
                    name:"Add Keyboard" ,
                    information:{
                        store:'',
                        proforma_id,
                        brand:'',
                        link:'',
                        name:'',
                        item_active:1,
                        sol:0,
                        dol:0
                    },
                    others:{
                        proforma_id,
                        modal:true,
                        dataStore:store,
                        dataBrand:brand,
                        reloadForDB:loadKeyboard,
                    },
                    Item: Keyboard
                }}/>
            <ModalAddItem
                data={{
                    name:"Add Cabinet" ,
                    information:{
                        store:'',
                        proforma_id,
                        brand:'',
                        link:'',
                        name:'',
                        item_active:1,
                        sol:0,
                        dol:0
                    },
                    others:{
                        proforma_id,
                        modal:true,
                        dataStore:store,
                        dataBrand:brand,
                        reloadForDB:loadCabinet,
                    },
                    Item: Cabinet
                }}/>
        </Row>
        <br/>
        <div>
            {processor.length>= 1?  processor.map((data, index)=>
                <Processor
                    key={"item_processor"+index+"_"+data.id}
                    data={{...data, index}}
                    others={{
                        processorType,
                        dataStore:store,
                        reloadForDB:loadProcessor
                    }}
                />)
                : !statusProcessor && <Loading data={{title:"Wait please, loading processor data..."}}/>
            }
            {processor.length>= 1&& <br/>}
            {powersupply.length>= 1?  powersupply.map((data, index)=>
                <Powersupply
                    key={"item_powersupply"+index+"_"+data.id}
                    data={{...data, index}}
                    others={{
                        dataStore:store,
                        dataBrand: brand,
                        dataPowersupplyWatts:powersupplyWatts,
                        dataPowersupplyCertificate:powersupplyCertificate,
                        reloadForDB:loadProcessor
                    }}
                />)
                : !statusPowersupply && <Loading data={{title:"Wait please, loading Power Supply data..."}}/>
            }
            {powersupply.length>= 1&&  <br/>}
            {graphicscard.length>= 1? graphicscard.map((data, index)=>
                <Graphicscard
                    key={"item_graphicscard"+index+"_"+data.id}
                    data={{...data, index}}
                    others={{
                        proforma_id,
                        dataStore:store,
                        dataSize: memoryRAMSize,
                        dataBrand: brand,
                        reloadForDB:loadGraphicscard,
                    }}
                />)
                : !statusGraphicscard && <Loading data={{title:"Wait please, loading Graphics Card data..."}}/>
            }
            {graphicscard.length>= 1&&  <br/>}
            {disk.length>= 1?  disk.map((data, index)=>
                <Disk
                    key={"item_disk"+index+"_"+data.id}
                    data={{...data, index}}
                    others={{
                        proforma_id,
                        dataStore:store,
                        dataBrand: brand,
                        diskType,
                        diskSize,
                        reloadForDB:loadDisk,
                    }}
                />)
                : !statusDisk && <Loading data={{title:"Wait please, loading Disk data..."}}/>
            }
            {disk.length>= 1&&  <br/>}
            {display.length>= 1?  display.map((data, index)=>
                <Display
                    key={"item_display"+index+"_"+data.id}
                    data={{...data, index}}
                    others={{
                        proforma_id,
                        dataStore:store,
                        dataBrand: brand,
                        displayPanel,
                        displaySize,
                        reloadForDB:loadDisplay,
                    }}
                />)
                : !statusDisplay && <Loading data={{title:"Wait please, loading Display data..."}}/>
            }
            {display.length>= 1&&  <br/>}
            {memoryRAM.length>= 1?   memoryRAM.map((data, index)=>
                <MemoryRam
                    key={"item_memory_ram"+index+"_"+data.id}
                    data={{...data, index}}
                    others={{
                        proforma_id,
                        dataStore:store,
                        dataType:memoryRAMType,
                        dataFreq:memoryRAMFrequency,
                        dataBrand:brand,
                        dataSize:memoryRAMSize,
                        reloadForDB:loadMemoryRAM,
                    }}
                />)
                : !statusMemoryRAM && <Loading data={{title:"Wait please, loading Memory RAM data..."}}/>
            }
            {memoryRAM.length>= 1&&  <br/>}
            {motherboard.length>= 1?   motherboard.map((data, index)=>
                <Motherboard
                    key={"item_motherboard"+index+"_"+data.id}
                    data={{...data, index}}
                    others={{
                        proforma_id,
                        dataStore:store,
                        dataBrand:brand,
                        processorType,
                        reloadForDB:loadMotherboard,
                    }}
                />)
                : !statusMotherboard && <Loading data={{title:"Wait please, loading Motherboard data..."}}/>
            }
            {motherboard.length>= 1&&  <br/>}
            {mouse.length>= 1?  mouse.map((data, index)=>
                <Mouse
                    key={"item_mouse"+index+"_"+data.id}
                    data={{...data, index}}
                    others={{
                        proforma_id,
                        dataStore:store,
                        dataBrand:brand,
                        reloadForDB:loadMouse,
                    }}
                />)
                : !statusMouse && <Loading data={{title:"Wait please, loading Mouse data..."}}/>
            }
            {mouse.length>= 1&&  <br/>}
            {keyboard.length>= 1?  keyboard.map((data, index)=>
                <Keyboard
                    key={"item_keyboard"+index+"_"+data.id}
                    data={{...data, index}}
                    others={{
                        proforma_id,
                        dataStore:store,
                        dataBrand:brand,
                        reloadForDB:loadKeyboard,
                    }}
                />)
                : !statuskeyboard && <Loading data={{title:"Wait please, loading Keyboard data..."}}/>
            }
            {keyboard.length>= 1&&  <br/>}
            {cabinet.length>= 1? cabinet.map((data, index)=>
                <Cabinet
                    key={"item_cabinet"+index+"_"+data.id}
                    data={{...data, index}}
                    others={{
                        proforma_id,
                        dataStore:store,
                        dataBrand:brand,
                        reloadForDB:loadCabinet,
                    }}
                />)
                : !statusCabinet && <Loading data={{title:"Wait please, loading Cabinet data..."}}/>
            }
        </div>

        <br/>
        <br/>
        <br/>
        <ModalDeleteProforma
            data={{
                title:"Remove this proforma",
                text:"this action cannot be reversed",
                ok: deleteProforma
            }}/>

        <br/>
        <br/>
    </Container>
)}
