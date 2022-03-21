import {useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import ModalComponent from "./util/ModalComponent";
import { Row} from "react-bootstrap";
import MemoryRam from "./proforma_data/memory_ram/MemoryRam";
import { Toaster } from 'react-hot-toast';

import pool from "../config/connection";

export default function Proforma(){
    const {proforma_id} = useParams();

    const [memoryRAM, setMemoryRAM] = useState([]);
    const [memoryRAMType, setMemoryRAMType] = useState([]);
    const [memoryRAMFrequency, setMemoryRAMFrequency] = useState([]);
    const [memoryRAMSize, setMemoryRAMSize] = useState([]);
    const [brand, setBrand] = useState([]);
    const [store, setStore] = useState([]);


    console.log("id dentro de useProforma",proforma_id)

    const loadMemoryRAM = async () =>{
        console.log("entro al load ram")
        const hola = await pool.getMemoryRam(proforma_id)
            .then(({data})=>{
                console.log("data.memory_ram",data)
                setMemoryRAM(data)

            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
        console.log('esto es el hola... ', hola)
    }
    const loadMemoryRAMType = async () =>{
        console.log("entro al load ram")
        const hola = await pool.getMemoryRamType()
            .then(({data})=>{
                console.log("RAM Type=> data only",data)
                setMemoryRAMType(data)

            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
        console.log('esto es el hola... ', hola)
    }
    const loadMemoryRAMFrequency = async () =>{
        console.log("entro al load ram")
        const hola = await pool.getMemoryRamFrequency()
            .then(({data})=>{
                console.log("RAM Frequency=> data only",data)
                console.log("data.memory_ram",data[0])
                setMemoryRAMFrequency(data)

            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
        console.log('esto es el hola... ', hola)
    }
    const loadMemoryRAMSize = async () =>{
        console.log("entro al load ram")
        const hola = await pool.getMemoryRamSize()
            .then(({data})=>{
                console.log(" RAM Size=> data only",data)
                setMemoryRAMSize(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
        console.log('esto es el hola... ', hola)
    }

    const loadStore = async() =>{
        await pool.getStore()
            .then((data)=>setStore(data))
            .catch((err)=>console.log("there Was an Error getting the data ",err))
    }
    const loadBrand = async() =>{
        await pool.getBrand()
            .then((data)=>setBrand(data))
            .catch((err)=>console.log("there Was an Error getting the data ",err))
    }


        console.log("id front ",proforma_id)

    useEffect(async()=>{
        await loadMemoryRAM()
        await loadMemoryRAMType()
        await loadMemoryRAMSize()
        await loadMemoryRAMFrequency()
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


    </>
)}
