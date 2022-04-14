import {Col, Row} from "react-bootstrap";
import img_display from "../../../assets/img/hardware/display-2.png";
import React from "react";

export const ItemDisplay =({data}) =>{
    const {display, parseText }= data;
    return(
        <>
            {display &&
                display.map( ( data, index)=>
                <Col key={index+"_item_display"} className={"p-2"}>
                    <Row className={'justify-content-center'}>
                        <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                        <img className={"img-item-project"} src={img_display} alt={"img"}/>
                        <span><b>{data.brand || "  "}</b></span>
                        {data.size && data.panel? <span><b>{data.size} | {data.panel}</b></span>: false}
                        {data.size && !data.panel? <span><b>{data.size}</b></span>: false}
                        {!data.size && data.panel? <span><b>{data.panel}</b></span>: false}
                    </Row>
                </Col>
            )}
        </>
    )
}