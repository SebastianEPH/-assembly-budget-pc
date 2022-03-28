import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import connectionAPI from "../config/axios";
import "../App.css"
import {Col, Container, Row} from "react-bootstrap";
import gfgLogo from "../assets/img/hardware/disipador.png";
export default function ListProforma (){
    const [projects, setProjects] = useState([]); // array vacio

    //
    // const url = 'http://127.0.0.1:5000/api/';

    useEffect(()=>{
        consultarApi()

    },[])

    const  consultarApi = async ()=>    {
        console.log('consultado API principal ')
        const queryProjects = await connectionAPI.get('/proforma')
        console.log(queryProjects )
        const json = queryProjects.data
        console.log(json)
        setProjects(json)
    }
    const fg=[
        {
            name:"SSD",
            img:gfgLogo,
        },
        {
            name:"gdf",
            img:"https://cdn.icon-icons.com/icons2/1367/PNG/512/32officeicons-31_89708.png",
        },
        {
            name:"SgdfgSD",
            img:"https://cdn.icon-icons.com/icons2/1367/PNG/512/32officeicons-31_89708.png",
        },
        {
            name:"SSD",
            img:gfgLogo,
        },
        {
            name:"dfgdf",
            img:"https://cdn.icon-icons.com/icons2/1367/PNG/512/32officeicons-31_89708.png",
        },
        {
            name:"SSfffD",
            img:gfgLogo,
        },
        {
            name:"S45D",
            img:"https://cdn.icon-icons.com/icons2/1367/PNG/512/32officeicons-31_89708.png",
        }
    ]
    return(
        <>
            <h1 className={"text-center"}>Proforma</h1>
            <hr/>
            <div className="row container justify-content-center">
                {projects.map(function ( {id, name, details, date_update, price, sol}, index){
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
                                            <Col md={5}> </Col>
                                            <Col md={6} className={"text-center price"}>{'S/. '+sol||"/S."}</Col>
                                            <Col md={1}> </Col>
                                        </Row>
                                    </Col>
                                    {fg.map( ( data, index)=>{
                                        return (
                                            <div key={index+"_item"} className={"col m-2"}>
                                                <Row className={'justify-content-center'}>
                                                    <img id={"img-item"}   src={data.img}   alt={"img"}/>
                                                    <span id={"col "}>{data.name}</span>
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
