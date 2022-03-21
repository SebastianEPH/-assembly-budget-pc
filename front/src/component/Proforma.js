import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
// import ShowProcessor from "./proforma_data/processor/ShowProcessor";
// import ModalAddProcessor from "./proforma_data/processor/ModalAddProcessor";
// import ShowMotherboard from "./proforma_data/motherboard/ShowMotherboard";
import ModalComponent from "./util/ModalComponent";
import { Row} from "react-bootstrap";
import MemoryRam from "./proforma_data/memory_ram/MemoryRam";
import { Toaster } from 'react-hot-toast';
import {UseProforma} from "./UseProforma";

export default function Proforma(){
    const {proforma_id} = useParams();
    const {memoryRAM, memoryRAMType, memoryRAMFrequency, memoryRAMSize, brand, loadMemoryRAM, loadBrand, loadStore, store} = UseProforma(proforma_id)
    console.log("id front ",proforma_id)

    useEffect(async()=>{
        await loadMemoryRAM()

        await loadBrand()
        await loadStore()

    },[])

return(
    <>
        <h1>Proforma Mode Editor</h1>
        {/*  Verificar el id , si no es una valido, entonces, mandar un mensaje de error  */}
        <Toaster position={"top-center"} />

        <Row className="justify-content-center">
            <ModalComponent title={"Add New Memory"}
                            MemoryRam={ MemoryRam }
                            proforma_id={proforma_id}
                            loadMemoryRAM={loadMemoryRAM}
                            modal={true} // if true, then use added, otherwise use update function
                            dataType={memoryRAMType}
                            dataStore={store}
                            dataFreq={memoryRAMFrequency}
                            dataBrand={brand}
                            dataSize={memoryRAMSize}
            />
        </Row>

        {/* Memory RAM */}
        {memoryRAM.toString() !== ""? <div className="col-auto"><h4>Memory RAM </h4></div> :""}

        {memoryRAM?
            memoryRAM.map((data, index)=>
                <MemoryRam
                    key={index +"memory"}
                    data={data}
                    dataType={memoryRAMType}
                    dataSize={memoryRAMSize}
                    dataBrand={brand}
                    dataStore={store}
                    loadMemoryRAM={loadMemoryRAM}
                    dataFreq={memoryRAMFrequency}
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


    </>
)}
