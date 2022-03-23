import {useParams} from "react-router-dom";
import { useEffect} from "react";
import ModalMemoryRam from "./proforma_data/memory_ram/modalMemoryRam";

import ModalProcessor from "./proforma_data/processor/ModalProcessor";
import { Row} from "react-bootstrap";
import MemoryRam from "./proforma_data/memory_ram/MemoryRam";
import Processor from "./proforma_data/processor/Processor";
import { Toaster } from 'react-hot-toast';
import {UseProforma} from "./hooks/UseProforma";
import Motherboard from "./proforma_data/motherboard/motherboard";
import ModalMotherboard from "./proforma_data/motherboard/modalMotherboard";
import ModalPowersupply from "./proforma_data/powersupply/ModalPowersupply";
import Powersupply from "./proforma_data/powersupply/Powersupply";



export default function Proforma(){
    const {proforma_id} = useParams();

    const {
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

return(
    <div className="container-fluid">
        <h1>Proforma Mode Editor</h1>


        {/*  Verificar el id , si no es una valido, entonces, mandar un mensaje de error  */}
        <Toaster position={"top-center"} />

        <Row className="justify-content-center">
            <ModalProcessor
                Processor={ Processor }
                proforma_id={proforma_id}
                reloadForDB ={loadProcessor}
                modal={true} // if true, then use added, otherwise use update function
                dataStore={store}
                processorType={processorType}
            />
            <ModalMemoryRam
                            proforma_id={proforma_id}
                            reloadForDB ={loadMemoryRAM}
                            modal={true} // if true, then use added, otherwise use update function
                            dataType={memoryRAMType}
                            dataStore={store}
                            dataFreq={memoryRAMFrequency}
                            dataBrand={brand}
                            dataSize={memoryRAMSize}
            />
            <ModalMotherboard
                proforma_id={proforma_id}
                reloadForDB ={loadMotherboard}
                modal={true} // if true, then use added, otherwise use update function
                dataStore={store}
                processorType={processorType}
            />
            <ModalPowersupply
                data={{
                    proforma_id,
                    reloadForDB :loadPowersupply,
                    dataPowersupplyWatts:powersupplyWatts,
                    dataPowersupplyCertificate:powersupplyCertificate,
                    powersupply,
                    dataStore:store,
                    dataBrand:brand,
                    modal:false
                }}
            />
        </Row>

        {/* Processor */}
        {processor.toString() !== ""? <div className="col-auto text-center"><hr/><h4>Processor</h4><hr/><br/></div> :""}
        {processor?
            processor.map((data, index)=>
                <Processor
                    key={index +"processor"}
                    data={data}
                    processorType={processorType}
                    dataStore={store}
                    reloadForDB ={loadProcessor}
                />)
            :"loading"}

        {/* Motherboard*/}
        {motherboard.toString() !== ""? <div className="col-auto text-center"><hr/><h4>Motherboard</h4><hr/><br/></div> :""}
        {motherboard?
            motherboard.map((data, index)=>
                <Motherboard
                    key={index +"motherboard"}
                    data={data}
                    processorType={processorType}
                    dataStore={store}
                    reloadForDB ={loadMotherboard}
                />)
            :"loading"}

        {/* Memory RAM */}
        {memoryRAM.toString() !== ""? <div className="col-auto text-center"><hr/><h4>Memory RAM</h4><hr/><br/></div> :""}
        {memoryRAM?
            memoryRAM.map((data, index)=>
                <MemoryRam
                    key={index +"memory"}
                    data={data}
                    dataType={memoryRAMType}
                    dataSize={memoryRAMSize}
                    dataBrand={brand}
                    dataStore={store}
                    dataFreq={memoryRAMFrequency}
                    reloadForDB ={loadMemoryRAM}
                />)
            :"loading"}

        {/* Power Supply */}
        {powersupply.toString() !== ""? <div className="col-auto text-center"><hr/><h4>Power Supply</h4><hr/><br/></div> :""}
        {powersupply?
            powersupply.map((data, index)=>
                <Powersupply
                    key={index +"processor"}
                    data={data}
                    processorType={processorType}
                    dataStore={store}
                    dataBrand={brand}
                    dataPowersupplyWatts={powersupplyWatts}
                    dataPowersupplyCertificate={powersupplyCertificate}
                    reloadForDB ={loadProcessor}
                />)
            :"loading"}


    </div>
)}
