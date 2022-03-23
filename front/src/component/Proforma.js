import {useParams} from "react-router-dom";
import { useEffect} from "react";
import ModalMemoryRam from "./proforma_data/memory_ram/modalMemoryRam";

import ModalProcessor from "./proforma_data/processor/modalProcessor";
import { Row} from "react-bootstrap";
import MemoryRam from "./proforma_data/memory_ram/MemoryRam";
import Processor from "./proforma_data/processor/Processor";
import { Toaster } from 'react-hot-toast';
import {UseProforma} from "./hooks/UseProforma";



export default function Proforma(){
    const {proforma_id} = useParams();

    const {
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
    } = UseProforma(proforma_id)

    useEffect(async()=>{
        await loadProcessor()
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
            <ModalMemoryRam
                            MemoryRam={ MemoryRam }
                            proforma_id={proforma_id}
                            reloadForDB ={loadMemoryRAM}
                            modal={true} // if true, then use added, otherwise use update function
                            dataType={memoryRAMType}
                            dataStore={store}
                            dataFreq={memoryRAMFrequency}
                            dataBrand={brand}
                            dataSize={memoryRAMSize}
            />
            <ModalProcessor
                            Processor={ Processor }
                            proforma_id={proforma_id}
                            reloadForDB ={loadProcessor}
                            modal={true} // if true, then use added, otherwise use update function
                            dataStore={store}
                            dataBrand={brand}
            />
        </Row>




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
                    reloadForDB ={loadMemoryRAM}
                    dataFreq={memoryRAMFrequency}
                />)
            :"loading"}


        {/* Processor */}
        {processor.toString() !== ""? <div className="col-auto text-center"><hr/><h4>Processor</h4><hr/><br/></div> :""}
        {processor?
            processor.map((data, index)=>
                <Processor
                    key={index +"processor"}
                    data={data}
                    dataBrand={brand}
                    dataStore={store}
                    reloadForDB ={loadProcessor}
                />)
            :"loading"}




        {/*{memoryRAM.map((data, index)=>*/}
        {/*    <MemoryRam*/}
        {/*       key={index}*/}
        {/*       data={data}*/}
        {/*       dataType={memoryRAMType}*/}
        {/*       dataSize={memoryRAMSize}*/}
        {/*       dataBrand={brand}*/}
        {/*       dataStore={store}*/}
        {/*       loadMemoryRAM={loadMemoryRAM}*/}
        {/*       dataFreq={memoryRAMFrequency}*/}
        {/*       />)}*/}


    </div>
)}
