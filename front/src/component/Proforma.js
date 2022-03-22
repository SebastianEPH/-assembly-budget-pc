import {useParams} from "react-router-dom";
import { useEffect} from "react";
import ModalComponent from "./util/ModalComponent";
import { Row} from "react-bootstrap";
import MemoryRam from "./proforma_data/memory_ram/MemoryRam";
import { Toaster } from 'react-hot-toast';
import {UseProforma} from "./hooks/UseProforma";

export default function Proforma(){
    const {proforma_id} = useParams();

    const {
        memoryRAM,
        memoryRAMType,
        memoryRAMFrequency,
        memoryRAMSize,
        loadMemoryRAM,
        loadMemoryRAMType, loadMemoryRAMSize, loadMemoryRAMFrequency,
        loadBrand,
        loadStore,
        brand,
        store
    } = UseProforma(proforma_id)

    useEffect(()=>{
        loadMemoryRAM().then(r => {})
        loadMemoryRAMType().then(r => {})
        loadMemoryRAMSize().then(r => {})
        loadMemoryRAMFrequency().then(r => {})
        loadBrand().then(r => {})
        loadStore().then(r => {})

    },[])

return(
    <div className="container-fluid">
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
        {memoryRAM.toString() !== ""? <div className="col-auto text-center"><hr/><h4>Memory RAM </h4><hr/><br/></div> :""}
        {memoryRAM?
            memoryRAM.map((data, index)=>
                <MemoryRam
                    key={index +"memory"}
                    data={data}
                    modal={false}
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


    </div>
)}
