import React from "react";
import {Col, Row} from "react-bootstrap";
import img_memory_ram from "../../../assets/img/hardware/memory-ram-3.png";

export const ItemMemoryRAM =({data}) =>{
    const {memory_ram, parseText }= data;
    return(
        <>
            {memory_ram &&
                memory_ram.map( ( data, index)=>
                <Col key={index+"_item_memory_ram"} className={"p-2"}>
                    <Row className={'justify-content-center'}>
                        <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                        <img  className={"img-item-project"} src={img_memory_ram} alt={"img"}/>
                        <span><b>{data.type || "  "}</b></span>
                        {data.size && data.frequency? <span><b>{data.size} | {data.frequency}</b></span>: false}
                        {data.size && !data.frequency? <span><b>{data.size}</b></span>: false}
                        {!data.size && data.frequency? <span><b>{data.frequency}</b></span>: false}
                    </Row>
                </Col>
            )}
        </>
    )
}
