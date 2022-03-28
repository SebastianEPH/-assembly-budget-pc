import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import connectionAPI from "../config/axios";
import "../App.css"
import {Col, Container, Row} from "react-bootstrap";
import img_disipador from "../assets/img/hardware/disipador.png";
import img_memory_ram from "../assets/img/hardware/memory-ram-3.png";
import img_processor from "../assets/img/hardware/processor.png";
import img_motherboard from "../assets/img/hardware/motherboard.png";
import img_graphicscard from "../assets/img/hardware/graphics-card-3.png";
import img_mouse from "../assets/img/hardware/mouse.png";
import img_keyboard from "../assets/img/hardware/keyboard.png"
import img_display from "../assets/img/hardware/display-2.png"
import img_disk_hdd from "../assets/img/hardware/disk-hdd-2.png"
import img_disk_ssd from "../assets/img/hardware/disk-ssd.png"
import img_disk_mvne from "../assets/img/hardware/disk-mvne.png"

export default function ListProforma (){
    const [projects, setProjects] = useState([]); // array vacio

    const  consultarApi = async ()=>    {
        console.log('consultado API principal ')
        const queryProjects = await connectionAPI.get('/proforma')
        console.log(queryProjects )
        const json = queryProjects.data
        console.log(json)
        setProjects(json)
    }

    const parseText = (text) =>{
        const lengthText = 15
        if ( text && text.length >= lengthText ){
            return text.substring(0, lengthText)
        }else{
            return text
        }
    }


    useEffect(async ()=>{
         await consultarApi()
    },[])

    // useEffect(()=>{
    //     hola()
    // },[])


    const summ =(arr) => {
        let suma = 0
        arr.map(data => {
            if(data){
                if (!isNaN(data) || data!== "") {
                    // console.log("El item ", data, " si es un numero")
                    suma += parseInt(data)

                }
                // else {
                //     console.log("El item ", data, " no es un numero")
                // }
            }
        })
        console.log(suma)
        return suma
    }

    return(
        <>
            <h1 className={"text-center"}>Proforma</h1>
            <hr/>
            <div className="row container justify-content-center">
                {projects.map(function ( {id, name, details, date_update, price, sol,
                                             memory_ram, processor, motherboard,graphicscard, display, mouse, keyboard, disk}, index){
                    console.log(name)
                    const suma= (type= "sol")=>{
                        let suma = 0
                        suma += summ( processor.map(data=>data[type]))
                        suma += summ( memory_ram.map(data=>data[type]))
                        suma += summ( motherboard.map(data=>data[type]))
                        suma += summ( graphicscard.map(data=>data[type]))
                        suma += summ( display.map(data=>data[type]))
                        suma += summ( mouse.map(data=>data[type]))
                        suma += summ( keyboard.map(data=>data[type]))
                        suma += summ( disk.map(data=>data[type]))

                        return suma
                    }
                    const price_sol = suma("sol")
                    // const price_dol = suma("dol")

                    console.log("suma Soles : ",price_sol )
                    // console.log("suma dolares : ",price_dol )
                    console.log("==-=-=-=-=-=-=-==================================================")

                    return (
                        <Link key={index+"_conteiner"} className={"proforma "} to={`/proforma/${id}`} >
                            <Container className={"m-2"}>
                                <div className={"collection row justify-content-center"}>
                                    <Col md={2}> </Col>
                                    <Col md={8}>
                                        <h4>{name}</h4>
                                    </Col>
                                    <Col md={2}>
                                        <Row className={"text-start"}>
                                            <Col md={4}> </Col>
                                            <Col md={7} className={"text-center price"}>{price_sol ? "/S. "+price_sol : ""}</Col>
                                            <Col md={1}> </Col>
                                        </Row>
                                    </Col>
                                    {display.map( ( data, index)=>{
                                        return (
                                            <div key={index+"_item"} className={"col m-2"}>
                                                <Row className={'justify-content-center'}>
                                                    <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                                                    <img id={"img-item"} src={img_display} alt={"img"}/>
                                                    <span><b>{data.brand || "  "}</b></span>
                                                    {data.size && data.panel? <span><b>{data.size} | {data.panel}</b></span>: false}
                                                    {data.size && !data.panel? <span><b>{data.size}</b></span>: false}
                                                    {!data.size && data.panel? <span><b>{data.panel}</b></span>: false}
                                                </Row>
                                            </div>
                                        )
                                    })}

                                    {processor.map( ( data, index)=>{
                                        return (
                                            <div key={index+"_item"} className={"col m-2"}>
                                                <Row className={'justify-content-center'}>
                                                    <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                                                    <img id={"img-item"} src={img_processor} alt={"img"}/>
                                                    <span><b>{parseText(data.brand)}</b></span>
                                                </Row>
                                            </div>
                                        )
                                    })}
                                    {memory_ram.map( ( data, index)=>{
                                        return (
                                            <div key={index+"_item"} className={"col m-2"}>
                                                <Row className={'justify-content-center'}>
                                                    <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                                                    <img id={"img-item"} src={img_memory_ram} alt={"img"}/>
                                                    <span><b>{data.type || "  "}</b></span>
                                                    {data.size && data.frequency? <span><b>{data.size} | {data.frequency}</b></span>: false}
                                                    {data.size && !data.frequency? <span><b>{data.size}</b></span>: false}
                                                    {!data.size && data.frequency? <span><b>{data.frequency}</b></span>: false}
                                                </Row>
                                            </div>
                                        )
                                    })}
                                    {graphicscard.map( ( data, index)=>{
                                        return (
                                            <div key={index+"_item"} className={"col m-2"}>
                                                <Row className={'justify-content-center'}>
                                                    <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                                                    <img id={"img-item"} src={img_graphicscard} alt={"img"}/>
                                                    {data.size && data.brand? <span><b>{data.brand} | {data.size}</b></span>: false}
                                                    {data.size && !data.brand? <span><b>{data.size}</b></span>: false}
                                                    {!data.size && data.brand? <span><b>{data.brand}</b></span>: false}
                                                </Row>
                                            </div>
                                        )
                                    })}
                                    {disk.map( ( data, index)=>{
                                        return (
                                            <div key={index+"_item"} className={"col m-2"}>
                                                <Row className={'justify-content-center'}>
                                                    <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                                                    <img id={"img-item"} src={data.type === "SSD"? img_disk_ssd:data.type==="NVME"?img_disk_mvne:img_disk_hdd} alt={"img"}/>
                                                     <span><b>{data.brand}</b></span>
                                                    <span><b>{data.size}</b></span>

                                                </Row>
                                            </div>
                                        )
                                    })}
                                    {motherboard.map( ( data, index)=>{
                                        return (
                                            <div key={index+"_item"} className={"col m-2"}>
                                                <Row className={'justify-content-center'}>
                                                    <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                                                    <img id={"img-item"} src={img_motherboard} alt={"img"}/>
                                                    <span><b>{data.type}</b></span>
                                                </Row>
                                            </div>
                                        )
                                    })}

                                    {mouse.map( ( data, index)=>{
                                        return (
                                            <div key={index+"_item"} className={"col m-2"}>
                                                <Row className={'justify-content-center'}>
                                                    <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                                                    <img id={"img-item"} src={img_mouse} alt={"img"}/>
                                                     <span><b>{data.brand}</b></span>

                                                </Row>
                                            </div>
                                        )
                                    })}
                                    {keyboard.map( ( data, index)=>{
                                        return (
                                            <div key={index+"_item"} className={"col m-2"}>
                                                <Row className={'justify-content-center'}>
                                                    <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                                                    <img id={"img-item"} src={img_keyboard} alt={"img"}/>
                                                    <span><b>{data.brand}</b></span>

                                                </Row>
                                            </div>
                                        )
                                    })}

                                </div>
                            </Container>
                        </Link>
                    )
                })}
               <p></p>
                <button type="submit" className="collection-button fw-bold">Create new Proforma</button>
            </div>
        </>

    );
}
