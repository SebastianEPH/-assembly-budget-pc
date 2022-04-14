import {Col, Row} from "react-bootstrap";
import img_powersupply from "../../../assets/img/hardware/power-suply.png";
import React from "react";

export const ItemPowerSupply =({data}) =>{
    const {powersupply, parseText }= data;
    return(
        <>
            {powersupply&&
                powersupply.map((data, index)=>
                <Col key={index+"_item_powersupply"} className={"p-2"}>
                    <Row className={'justify-content-center'}>
                        <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                        <img className={"img-item-project"} src={img_powersupply} alt={"img"}/>
                        <span id={"col "}  className={data.watts ?"visible":"invisible"} >  {data.watts || "||"} </span>
                        <span><b>{data.certificate || "  "}</b></span>
                    </Row>
                </Col>
            )}
        </>
    )
}
