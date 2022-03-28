import {Link, NavLink} from "react-router-dom";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useForm} from "./hooks/UseView";
import "./View.css"


import gfgLogo from "../assets/img/hardware/disipador.png";

export default function NewProject (props){
    // const {} = useForm()

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
    // console.log("path",gfgLogo )
    return(
        <Container>
            <div className={"collection row justify-content-center"}>
                <h3>Titlolo de el sd;lkfdsdsf  sdkpdsfl dfskfds </h3>
                {fg.map( ( data, index)=>{
                    return (
                        <div key={index} className={"col m-2"}>
                                <Row className={'justify-content-center'}>
                                    <img id={"img-item"}   src={data.img}   alt={"img"}/>
                                    <span id={"col "}>{data.name}</span>
                                </Row>
                        </div>
                    )
                })}
            </div>
        </Container>
    );
}
