import React from "react";
import {Col, Row} from "react-bootstrap";
import img_disk_ssd from "../../../assets/img/hardware/disk-ssd.png";
import img_disk_mvne from "../../../assets/img/hardware/disk-mvne.png";
import img_disk_hdd from "../../../assets/img/hardware/disk-hdd-2.png";

export const ItemDisk =({data}) =>{
    const {disk, parseText }= data;
    return(
        <>
            {disk &&
                disk.map((data, index)=>
                <Col key={index+"_item_disk"} className={"p-2"}>
                    <Row className={'justify-content-center'}>
                        <span id={"col "}  className={data.name?"visible":"invisible"} >{parseText(data.name) || "||"}</span>
                        <img  className={"img-item-project"} src={data.type === "SSD"? img_disk_ssd:data.type==="NVME"?img_disk_mvne:img_disk_hdd} alt={"img"}/>
                        <span><b>{data.brand}</b></span>
                        <span><b>{data.size}</b></span>
                    </Row>
                </Col>
            )}
        </>
    )
}