import React from "react";
import {Col, Row} from "react-bootstrap";
import img_graphicscard from "../../../assets/img/hardware/graphics-card-3.png";

export const ItemGraphicsCard =({data}) =>{
    const {graphicscard, parseText }= data;
    return(
        <>
            {graphicscard &&
                graphicscard.map((data, index)=>
                    <Col key={index+"_item_graphics_card"} className={"p-2"}>
                        <Row className={'justify-content-center'}>
                            <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                            <img  className={"img-item-project"} src={img_graphicscard} alt={"img"}/>
                            {data.size && data.brand? <span><b>{data.brand} | {data.size}</b></span>: false}
                            {data.size && !data.brand? <span><b>{data.size}</b></span>: false}
                            {!data.size && data.brand? <span><b>{data.brand}</b></span>: false}
                        </Row>
                    </Col>
            )}
        </>
    )
}

