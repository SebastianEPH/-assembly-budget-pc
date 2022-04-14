import {Col, Row} from "react-bootstrap";
import React from "react";

export const ItemGeneric =({data}) =>{
    const {obj, parseText,name, img }= data;
    return(
        <>
            {obj&&
                obj.map((data, index)=>
                <Col key={index+"_item_"+name} className={"p-2"}>
                    <Row className={'justify-content-center'}>
                        <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                        <img className={"img-item-project"} src={img} alt={"img"}/>
                        <span><b>{parseText(data.brand)}</b></span>
                    </Row>
                </Col>
            )}
        </>
    )
}