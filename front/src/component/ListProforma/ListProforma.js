import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import connectionAPI from "../../connection/axios";
import "../../App.css"
import "../View.css"
import {Col, Container, Row} from "react-bootstrap";
import img_processor from "../../assets/img/hardware/processor.png";
import img_mouse from "../../assets/img/hardware/mouse.png";
import img_keyboard from "../../assets/img/hardware/keyboard.png"
import img_cabinet from "../../assets/img/hardware/cabinet.png"
import {Loading} from "../util/Loading";
import {CreateProforma} from "../CreateProforma";
import {ItemMemoryRAM} from "./items/ItemMemoryRAM";
import {ItemGraphicsCard} from "./items/ItemGraphicsCard";
import {ItemDisk} from "./items/ItemDisk";
import {ItemGeneric} from "./items/ItemGeneric";
import {ItemDisplay} from "./items/ItemDisplay";
import img_motherboard from "../../assets/img/hardware/motherboard.png";
import {Toaster} from "react-hot-toast";

export default function ListProforma (){
    const [projects, setProjects] = useState([]); // array vacio
    const [status, setStatus] = useState(false); // true if query to database
    const  consultarApi = async ()=>    {
        const queryProjects = await connectionAPI.get('/proforma')
        const json = queryProjects.data
        setProjects(json)
        setStatus(true)
    }
    const parseText = (text) =>{
        const lengthText = 15
        return text && text.length >= lengthText
            ? text.substring(0, lengthText)
            :text

    }
    useEffect(async ()=>{
         await consultarApi()
    },[])

    const summ =(arr) => {
        let suma = 0
        arr.map(data =>{
            if(data){
                if (!isNaN(data) || data!== "") {
                    suma += parseInt(data)
                }
            }
        })
        return suma
    }
    return(
        <>
            <h1 className={"text-center"}>List Proforma</h1>
            <hr/>
            <Toaster position={"top-center"} />
            <div className="row container justify-content-center">
                {projects.length>= 1?
                    projects.map(( {id, name, details, date_update, price, sol,
                                            memory_ram, processor, motherboard, graphicscard,
                                            display, mouse, keyboard, disk, cabinet ,powersupply }, index)=>{
                    const suma= (type= "sol")=>{
                        let suma = 0
                        suma += summ( processor.map(data=>data[type]))
                        suma += summ( memory_ram.map(data=>data[type]))
                        suma += summ( motherboard.map(data=>data[type]))
                        suma += summ( graphicscard.map(data=>data[type]))
                        suma += summ( display.map(data=>data[type]))
                        suma += summ( mouse.map(data=>data[type]))
                        suma += summ( cabinet.map(data=>data[type]))
                        suma += summ( keyboard.map(data=>data[type]))
                        suma += summ( powersupply.map(data=>data[type]))
                        suma += summ( disk.map(data=>data[type]))
                        return suma
                    }
                    const price_sol = suma("sol")
                    const price_dol = suma("dol")

                    return (
                        <Link key={index+"_container"} className={"item-project m-1"} to={`/proforma/${id}`} >
                            <Container className={"m-2"}>
                                <Row className={"justify-content-center"}>
                                    <Row className={"align-items-start"}>
                                        <Col sm={2} className={price_sol?"price-item-container":""}>
                                            <h4 className={"price-item"}>{price_sol ? "/S. "+price_sol : ""}</h4>
                                        </Col>
                                        <Col sm={8}>
                                            <h4>{name}</h4>
                                        </Col>
                                        <Col sm={2} className={date_update?"price-item-container":""}>
                                            <h4 className={"price-item"}>{"hace 5 días"}</h4>
                                        </Col>
                                    </Row>
                                    <ItemGeneric        data={{obj:processor, parseText, name:"processor", img:img_processor}}/>
                                    <ItemDisplay        data={{display,parseText}}/>
                                    <ItemMemoryRAM      data={{memory_ram, parseText}}/>
                                    <ItemGraphicsCard   data={{graphicscard, parseText}}/>
                                    <ItemDisk           data={{disk, parseText}}/>
                                    <ItemGeneric        data={{obj:motherboard, parseText, name:"motherboard", img:img_motherboard}}/>
                                    <ItemGeneric        data={{obj:mouse, parseText, name:"mouse", img:img_mouse}}/>
                                    <ItemGeneric        data={{obj:keyboard, parseText, name:"keyboard", img:img_keyboard}}/>
                                    <ItemGeneric        data={{obj:cabinet, parseText, name:"cabinet", img:img_cabinet}}/>
                                </Row>
                            </Container>
                        </Link>
                    )})
                    :
                        status
                        ? <p>Not found projects, create one... !! </p>
                        :
                        <Loading data={{title:"espere porfavor.,, "}}/>
                }

                <CreateProforma data={{reloadForDB:consultarApi}}/>
            </div>
        </>

    );
}
