import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
// import ShowProcessor from "./proforma_data/processor/ShowProcessor";
// import ModalAddProcessor from "./proforma_data/processor/ModalAddProcessor";
// import ShowMotherboard from "./proforma_data/motherboard/ShowMotherboard";
import ModalMemoryRam from "./proforma_data/memory_ram/ModalMemoryRam";
import {Container, Row} from "react-bootstrap";
import MemoryRam from "./proforma_data/memory_ram/MemoryRam";
import pool from "../config/connection"
// import {AlertMessage} from "./navegation/alertMessage";
// import MessageContext from "./hooks/MessageContext";
import { Toaster } from 'react-hot-toast';


export default function Proforma(){
    // const [processor, setProcessor] = useState([]); // array vacio
    // const [motherboard, setMotherboard] = useState([]); // array vacio
    // const [brandProcessor, setBrandProcessor] = useState([]);
    const [memoryRAM, setMemoryRAM] = useState([]);
    const [memoryRAMType, setMemoryRAMType] = useState([]);
    const [memoryRAMFrequency, setMemoryRAMFrequency] = useState([]);
    const [memoryRAMSize, setMemoryRAMSize] = useState([]);
    const [brand, setBrand] = useState([]);


    const {proforma_id} = useParams();
    console.log("#$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", useParams())
    console.log(" $$$$El ID de le proforma es: "+ proforma_id)


    useEffect(async ()=>{
        await pool.getBrand()
            .then((data)=>setBrand(data))
            .catch((err)=>console.log("there Was an Error getting the data ",err))
    },[])

    useEffect(async()=>{
        await pool.getProforma(proforma_id)
            .then((data)=>{
                setMemoryRAM(data.memory_ram)
                setMemoryRAMType(data.memory_ram_type)
                setMemoryRAMFrequency(data.memory_ram_frequency)
                setMemoryRAMSize(data.memory_ram_size)
                console.log('proforma ')
            })
            .catch((err)=>console.log("there Was an Error getting the data ",err))
    },[])


return(
 <div>
     <h1>Proforma Mode Editor</h1>

     {/*<AlertMessage/>*/}
     <Toaster position={"top-center"} />

     <Row className="justify-content-center">
         <ModalMemoryRam title={"Add New Memory"}>
             <MemoryRam data={{
                            proforma_id,
                            name:'',
                            type:0,
                            size:0,
                            freq:0,
                            dol:0,
                            sol:0
                        }}
                 modal={true}
                 dataType={memoryRAMType}
                 dataFreq={memoryRAMFrequency}
                 dataBrand={brand}
                 dataSize={memoryRAMSize}
             />
         </ModalMemoryRam>
         {/*<ModalAddProcessor/>*/}
     </Row>


     {/* Memory RAM */}
     {memoryRAM.toString() !== ""? <div className="col-auto"><h4>Memory RAM </h4></div> :""}
     {memoryRAM.map((data, index)=> <MemoryRam
                                                key={index}
                                                data={data}
                                                dataType={memoryRAMType}
                                                dataSize={memoryRAMSize}
                                                dataBrand={brand}
                                                dataFreq={memoryRAMFrequency}
                                                />)}

     {/*/!* Processor *!/*/}
     {/*{ processor.toString() !== ""? <div className="col-auto"><h4>Procesador</h4></div> :""}*/}

     {/*{processor.map(function(p , index){*/}
     {/*   return(*/}
     {/*      <ShowProcessor*/}
     {/*          id={p.id}*/}
     {/*          index={index}*/}
     {/*          name={p.name}*/}
     {/*          link={p.link}*/}
     {/*          active={p.active}*/}
     {/*          brand_id={p.brand_id}*/}
     {/*          store_id={p.store_id}*/}
     {/*          price_dol={p.price_dol}*/}
     {/*          price_sol={p.price_sol}*/}
     {/*          DATA_brand_processor={brandProcessor}*/}
     {/*          DATA_brand={brand}*/}
     {/*      />*/}
     {/*   )*/}
     {/*})}*/}

     {/*/!* Motherboard *!/*/}
     {/*{ motherboard.toString() !== "" ? <div className="col-auto"><h4>Motherboard</h4></div> :""}*/}
     {/*{motherboard.map(function(data, index){*/}
     {/*    return(*/}
     {/*        <ShowMotherboard*/}
     {/*            motherboard_id = {data.id}*/}
     {/*            index={index}*/}
     {/*            proforma_id={data.proforma_id}*/}
     {/*            name={data.name}*/}
     {/*            brand_id={data.brand_id}*/}
     {/*            img={data.img}*/}
     {/*            cpu_id={data.cpu_id}*/}
     {/*            active={data.active}*/}
     {/*            DATA_brand_processor={brandProcessor}*/}
     {/*            DATA_brand={brand}*/}
     {/*        />*/}
     {/*    )*/}
     {/*})}*/}


 </div>
)
}

//{ motherboard.toString() !== ""
//    ? <div className="col-auto">
//        <h4>Procesador</h4>
//    </div>
//    :""}
//

//{/* Memory RAM */}
//<div className="col-10">
//    <label  className="form-label">Memory RAM</label>
//    <input type="text" className="form-control" id="memory_ram" placeholder="Name and model"/>
//</div>{/* input */}
//<div className="col-md-2">
//    <label className="form-label">Price</label>
//    <div className="input-group">
//        <div className="input-group-text">$</div>
//        <input type="text" className="form-control" id="ram_dolar"
//               placeholder="0"/>
//        <div className="input-group-text">S/</div>
//        <input type="text" className="form-control" id="ram_Sol"
//               placeholder="0" readOnly/>
//    </div>
//</div>{/* Price */}
//<div className="col-md-2">
//    <select id="ram_store" className="form-select">
//        <option defaultValue>Other Store</option>
//        <option>Compuvision</option>
//        <option>Impacto</option>
//        <option>CyC computer</option>
//        <option>Cercoplus</option>
//    </select>
//</div>{/* Store */}
//<div className="col-md-10">
//    <div className="input-group">
//        <div className="input-group-text">
//            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                 className="bi bi-link-45deg" viewBox="0 0 16 16">
//                <path
//                    d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
//                <path
//                    d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
//            </svg></div>
//        <input type="link" className="form-control" id="ram_link" placeholder="Link"/>
//        <a className="btn btn-primary" >
//            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
//                 className="bi bi-box-arrow-up-right" viewBox="0 0 20 20">
//                <path fillRule="evenodd"
//                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
//                <path fillRule="evenodd"
//                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
//            </svg></a>
//    </div>
//</div>{/* link */}
//
//{/* Motherboard */}
//<div className="col-10">
//    <label  className="form-label">Motherboard</label>
//    <input type="text" className="form-control" id="motherboard" placeholder="Name and model"/>
//</div>{/* input */}
//<div className="col-md-2">
//    <label className="form-label">Price</label>
//    <div className="input-group">
//        <div className="input-group-text">$</div>
//        <input type="text" className="form-control" id="motherboard_dolar"
//               placeholder="0"/>
//        <div className="input-group-text">S/</div>
//        <input type="text" className="form-control" id="motherboard_Sol"
//               placeholder="0" readOnly/>
//    </div>
//</div>{/* Price */}
//<div className="col-md-2">
//    <select id="motherboard_store" className="form-select">
//        <option defaultValue>Other Store</option>
//        <option>Compuvision</option>
//        <option>Impacto</option>
//        <option>CyC computer</option>
//        <option>Cercoplus</option>
//    </select>
//</div>{/* Store */}
//<div className="col-md-10">
//    <div className="input-group">
//        <div className="input-group-text">
//            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                 className="bi bi-link-45deg" viewBox="0 0 16 16">
//                <path
//                    d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
//                <path
//                    d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
//            </svg></div>
//        <input type="link" className="form-control" id="motherboard_link" placeholder="Link"/>
//        <a className="btn btn-primary" >
//            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
//                 className="bi bi-box-arrow-up-right" viewBox="0 0 20 20">
//                <path fillRule="evenodd"
//                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
//                <path fillRule="evenodd"
//                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
//            </svg></a>
//    </div>
//</div>{/* link */}
//
//{/* Power Supply*/}
//<div className="col-10">
//    <label  className="form-label">Power Supply</label>
//    <input type="text" className="form-control" id="power_supply" placeholder="Name and model"/>
//</div>{/* input */}
//<div className="col-md-2">
//    <label className="form-label">Price</label>
//    <div className="input-group">
//        <div className="input-group-text">$</div>
//        <input type="text" className="form-control" id="power_supply_dolar"
//               placeholder="0"/>
//        <div className="input-group-text">S/</div>
//        <input type="text" className="form-control" id="power_supply_Sol"
//               placeholder="0" readOnly/>
//    </div>
//</div>{/* Price */}
//<div className="col-md-2">
//    <select id="power_supply_store" className="form-select">
//        <option defaultValue>Other Store</option>
//        <option>Compuvision</option>
//        <option>Impacto</option>
//        <option>CyC computer</option>
//        <option>Cercoplus</option>
//    </select>
//</div>{/* Store */}
//<div className="col-md-10">
//    <div className="input-group">
//        <div className="input-group-text">
//            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                 className="bi bi-link-45deg" viewBox="0 0 16 16">
//                <path
//                    d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
//                <path
//                    d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
//            </svg></div>
//        <input type="link" className="form-control" id="power_supply_link" placeholder="Link"/>
//        <a className="btn btn-primary" >
//            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
//                 className="bi bi-box-arrow-up-right" viewBox="0 0 20 20">
//                <path fillRule="evenodd"
//                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
//                <path fillRule="evenodd"
//                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
//            </svg></a>
//    </div>
//</div>{/* link */}
//
//{/* SSD */}
//<div className="col-10">
//    <label  className="form-label">SSD</label>
//    <input type="text" className="form-control" id="ssd" placeholder="Name and model"/>
//</div>{/* input */}
//<div className="col-md-2">
//    <label className="form-label">Price</label>
//    <div className="input-group">
//        <div className="input-group-text">$</div>
//        <input type="text" className="form-control" id="ssd_dolar"
//               placeholder="0"/>
//        <div className="input-group-text">S/</div>
//        <input type="text" className="form-control" id="ssd_Sol"
//               placeholder="0" readOnly/>
//    </div>
//</div>{/* Price */}
//<div className="col-md-2">
//    <select id="ssd_store" className="form-select">
//        <option defaultValue>Other Store</option>
//        <option>Compuvision</option>
//        <option>Impacto</option>
//        <option>CyC computer</option>
//        <option>Cercoplus</option>
//    </select>
//</div>{/* Store */}
//<div className="col-md-10">
//    <div className="input-group">
//        <div className="input-group-text">
//            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                 className="bi bi-link-45deg" viewBox="0 0 16 16">
//                <path
//                    d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
//                <path
//                    d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
//            </svg></div>
//        <input type="link" className="form-control" id="ssd_link" placeholder="Link"/>
//        <a className="btn btn-primary" >
//            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
//                 className="bi bi-box-arrow-up-right" viewBox="0 0 20 20">
//                <path fillRule="evenodd"
//                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
//                <path fillRule="evenodd"
//                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
//            </svg></a>
//    </div>
//</div>{/* link */}
//
//{/* Graphics Card */}
//<div className="col-10">
//    <label  className="form-label">Graphics Card</label>
//    <input type="text" className="form-control" id="graphics_card" placeholder="Name and model"/>
//</div>{/* input */}
//<div className="col-md-2">
//    <label className="form-label">Price</label>
//    <div className="input-group">
//        <div className="input-group-text">$</div>
//        <input type="text" className="form-control" id="graphics_card_dolar"
//               placeholder="0"/>
//        <div className="input-group-text">S/</div>
//        <input type="text" className="form-control" id="graphics_card_Sol"
//               placeholder="0" readOnly/>
//    </div>
//</div>{/* Price */}
//<div className="col-md-2">
//    <select id="graphics_card_store" className="form-select">
//        <option defaultValue>Other Store</option>
//        <option>Compuvision</option>
//        <option>Impacto</option>
//        <option>CyC computer</option>
//        <option>Cercoplus</option>
//    </select>
//</div>{/* Store */}
//<div className="col-md-10">
//    <div className="input-group">
//        <div className="input-group-text">
//            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                 className="bi bi-link-45deg" viewBox="0 0 16 16">
//                <path
//                    d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
//                <path
//                    d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
//            </svg></div>
//        <input type="link" className="form-control" id="graphics_card_link" placeholder="Link"/>
//        <a className="btn btn-primary" >
//            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
//                 className="bi bi-box-arrow-up-right" viewBox="0 0 20 20">
//                <path fillRule="evenodd"
//                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
//                <path fillRule="evenodd"
//                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
//            </svg></a>
//    </div>
//</div>{/* link */}
