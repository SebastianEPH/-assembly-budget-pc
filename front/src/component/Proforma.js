import { useParams, useNavigate} from "react-router-dom";
import { useEffect} from "react";

import {ModalAddItem} from "./util/Modal/ModalAddItem";
import {Container, Row} from "react-bootstrap";
import {Processor} from "./proforma_data/Processor";
import toast, { Toaster } from 'react-hot-toast';
import {UseProforma} from "./hooks/UseProforma";
import ModalDeleteProforma from "./ModalDeleteProforma";
import connectionAPI from "../connection/axios";
import {Powersupply} from "./proforma_data/Powersupply";


export default function Proforma(){
    const {proforma_id} = useParams();
    const {
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
        <h1>Proforma Mode Editor</h1>

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



            {/*<Processor*/}
            {/*    data={{*/}
            {/*        store:'',*/}
            {/*        proforma_id,*/}
            {/*        brand:'',*/}
            {/*        link:'',*/}
            {/*        select:'',*/}
            {/*        name:'',*/}
            {/*        item_active:1,*/}
            {/*        sol:0,*/}
            {/*        dol:0*/}
            {/*    }}*/}
            {/*    // theme={theme}*/}
            {/*    proforma_id={proforma_id}*/}
            {/*    // modalHandleClose ={handleClose}*/}
            {/*    // reloadForDB ={reloadForDB }*/}
            {/*    modal={true} // if true, then use added, otherwise use update function*/}
            {/*    // dataStore={dataStore}*/}
            {/*    processorType={processorType}>*/}
            {/*</Processor>*/}

        {/*    <ModalGraphicsCard*/}
        {/*        data={{*/}
        {/*            proforma_id,*/}
        {/*            reloadForDB :loadGraphicscard,*/}
        {/*            theme:'blue',*/}
        {/*            dataStore:store,*/}
        {/*            dataSize:memoryRAMSize,*/}
        {/*            dataBrand:brand,*/}
        {/*        }}*/}
        {/*    />*/}
        {/*    <ModalDisk*/}
        {/*        data={{*/}
        {/*            proforma_id,*/}
        {/*            reloadForDB :loadDisk,*/}
        {/*            theme:'green-pastel',*/}
        {/*            dataStore:store,*/}
        {/*            diskSize,*/}
        {/*            diskType,*/}
        {/*            dataBrand:brand,*/}
        {/*        }}*/}
        {/*    />*/}
        {/*    <ModalMemoryRam*/}
        {/*        proforma_id={proforma_id}*/}
        {/*        reloadForDB ={loadMemoryRAM}*/}
        {/*        modal={true} // if true, then use added, otherwise use update function*/}
        {/*        dataType={memoryRAMType}*/}
        {/*        dataStore={store}*/}
        {/*        theme={"violet"}*/}
        {/*        dataFreq={memoryRAMFrequency}*/}
        {/*        dataBrand={brand}*/}
        {/*        dataSize={memoryRAMSize}*/}
        {/*    />*/}
        {/*    <ModalMotherboard*/}
        {/*        proforma_id={proforma_id}*/}
        {/*        reloadForDB ={loadMotherboard}*/}
        {/*        modal={true} // if true, then use added, otherwise use update function*/}
        {/*        dataStore={store}*/}
        {/*        theme={'green'}*/}
        {/*        processorType={processorType}*/}
        {/*    />*/}
        {/*    <ModalPowersupply*/}
        {/*        data={{*/}
        {/*            proforma_id,*/}
        {/*            reloadForDB :loadPowersupply,*/}
        {/*            dataPowersupplyWatts:powersupplyWatts,*/}
        {/*            dataPowersupplyCertificate:powersupplyCertificate,*/}
        {/*            theme:'pink',*/}
        {/*            dataStore:store,*/}
        {/*            dataBrand:brand,*/}
        {/*        }}*/}
        {/*    />*/}
        {/*    <ModalCabinet*/}
        {/*        data={{*/}
        {/*            proforma_id,*/}
        {/*            reloadForDB :loadCabinet,*/}
        {/*            theme:'orange',*/}
        {/*            dataStore:store,*/}
        {/*            dataBrand:brand,*/}
        {/*        }}*/}
        {/*    />*/}
        {/*    <ModalKeyboard*/}
        {/*        data={{*/}
        {/*            proforma_id,*/}
        {/*            reloadForDB :loadKeyboard,*/}
        {/*            theme:'darkgray',*/}
        {/*            dataStore:store,*/}
        {/*            dataBrand:brand,*/}
        {/*        }}*/}
        {/*    />*/}
        {/*    <ModalMouse*/}
        {/*        data={{*/}
        {/*            proforma_id,*/}
        {/*            reloadForDB :loadMouse,*/}
        {/*            theme:'yellow',*/}
        {/*            dataStore:store,*/}
        {/*            dataBrand:brand,*/}
        {/*        }}*/}
        {/*    />*/}
        {/*    <ModalDisplay*/}
        {/*        data={{*/}
        {/*            proforma_id,*/}
        {/*            reloadForDB :loadDisplay,*/}
        {/*            theme:'deepskyblue',*/}
        {/*            dataStore:store,*/}
        {/*            dataBrand:brand,*/}
        {/*            displayPanel,*/}
        {/*            displaySize,*/}
        {/*        }}*/}
        {/*    />*/}
        </Row>

        {processor&& processor.map((data, index)=>
            <Processor
                key={"item_processor"+index+"_"+data.id}
                data={{...data, index}}
                others={{
                    processorType,
                    dataStore:store,
                    reloadForDB:loadProcessor
                }}
            />)
        }
        <br/>
        {powersupply&& powersupply.map((data, index)=>
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
        }


        {/*/!* Graphics Card *!/*/}
        {/*{graphicscard?*/}
        {/*    graphicscard.map((data, index)=>*/}
        {/*        <Graphicscard*/}
        {/*            key={index +"graphicscard"}*/}
        {/*            data={data}*/}
        {/*            dataStore={store}*/}
        {/*            dataBrand={brand}*/}
        {/*            dataSize={memoryRAMSize}*/}
        {/*            theme={'blue'}*/}
        {/*            reloadForDB ={loadGraphicscard}*/}
        {/*        />)*/}
        {/*    :"loading"}*/}

        {/*/!* Disk *!/*/}
        {/*{disk?*/}
        {/*    disk.map((data, index)=>*/}
        {/*        <Disk*/}
        {/*            key={index +"disk"}*/}
        {/*            data={data}*/}
        {/*            dataStore={store}*/}
        {/*            dataBrand={brand}*/}
        {/*            diskSize={diskSize}*/}
        {/*            diskType={diskType}*/}
        {/*            theme={'green-pastel'}*/}
        {/*            reloadForDB ={loadDisk}*/}
        {/*        />)*/}
        {/*    :"loading"}*/}


        {/*/!* Motherboard*!/*/}
        {/*{motherboard?*/}
        {/*    motherboard.map((data, index)=>*/}
        {/*        <Motherboard*/}
        {/*            key={index +"motherboard"}*/}
        {/*            data={data}*/}
        {/*            processorType={processorType}*/}
        {/*            dataStore={store}*/}
        {/*            theme={'green'}*/}
        {/*            reloadForDB ={loadMotherboard}*/}
        {/*        />)*/}
        {/*    :"loading"}*/}

        {/*/!* Memory RAM *!/*/}
        {/*{memoryRAM?*/}
        {/*    memoryRAM.map((data, index)=>*/}
        {/*        <MemoryRam*/}
        {/*            key={index +"memory"}*/}
        {/*            data={data}*/}
        {/*            dataType={memoryRAMType}*/}
        {/*            dataSize={memoryRAMSize}*/}
        {/*            dataBrand={brand}*/}
        {/*            dataStore={store}*/}
        {/*            theme={"violet"}*/}
        {/*            dataFreq={memoryRAMFrequency}*/}
        {/*            reloadForDB ={loadMemoryRAM}*/}
        {/*        />)*/}
        {/*    :"loading"}*/}

        {/*/!* Power Supply *!/*/}
        {/*{powersupply?*/}
        {/*    powersupply.map((data, index)=>*/}
        {/*        <Powersupply*/}
        {/*            key={index +"powersupply"}*/}
        {/*            data={data}*/}
        {/*            dataStore={store}*/}
        {/*            dataBrand={brand}*/}
        {/*            theme={'pink'}*/}
        {/*            dataPowersupplyWatts={powersupplyWatts}*/}
        {/*            dataPowersupplyCertificate={powersupplyCertificate}*/}
        {/*            reloadForDB ={loadPowersupply}*/}
        {/*        />)*/}
        {/*    :"loading"}*/}

        {/*/!* Cabinet *!/*/}
        {/*{cabinet?*/}
        {/*    cabinet.map((data, index)=>*/}
        {/*        <Cabinet*/}
        {/*            key={index +"cabinet"}*/}
        {/*            data={data}*/}
        {/*            dataStore={store}*/}
        {/*            dataBrand={brand}*/}
        {/*            theme={'orange'}*/}
        {/*            reloadForDB ={loadCabinet}*/}
        {/*        />)*/}
        {/*    :"loading"}*/}
        {/*/!* Kerboard *!/*/}
        {/*{keyboard?*/}
        {/*    keyboard.map((data, index)=>*/}
        {/*        <Keyboard*/}
        {/*            key={index +"keyboard"}*/}
        {/*            data={data}*/}
        {/*            dataStore={store}*/}
        {/*            dataBrand={brand}*/}
        {/*            theme={'darkgray'}*/}
        {/*            reloadForDB ={loadKeyboard}*/}
        {/*        />)*/}
        {/*    :"loading"}*/}
        {/*/!* Mouse *!/*/}
        {/*{mouse?*/}
        {/*    mouse.map((data, index)=>*/}
        {/*        <Keyboard*/}
        {/*            key={index +"mouse"}*/}
        {/*            data={data}*/}
        {/*            dataStore={store}*/}
        {/*            dataBrand={brand}*/}
        {/*            theme={'yellow'}*/}
        {/*            reloadForDB ={loadMouse}*/}
        {/*        />)*/}
        {/*    :"loading"}*/}

        {/*/!* Display *!/*/}
        {/*{display?*/}
        {/*    display.map((data, index)=>*/}
        {/*        <Display*/}
        {/*            key={index +"display"}*/}
        {/*            data={data}*/}
        {/*            dataStore={store}*/}
        {/*            dataBrand={brand}*/}
        {/*            displayPanel={displayPanel}*/}
        {/*            displaySize={displaySize}*/}
        {/*            theme={'deepskyblue'}*/}
        {/*            reloadForDB ={loadDisplay}*/}
        {/*        />)*/}
        {/*    :"loading"}*/}
        <br/>
        <br/>
        <br/>
            <Row>
                <ModalDeleteProforma
                    data={{
                        title:"Remove this proforma",
                        text:"this action cannot be reversed",
                        ok: deleteProforma
                    }}/>

            </Row>
        <br/>
        <br/>
    </Container>
)}
