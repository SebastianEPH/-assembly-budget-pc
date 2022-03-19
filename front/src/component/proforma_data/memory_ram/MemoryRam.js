import InputSelect from "../../util/InputSelect";
import {useForm} from "../../hooks/useForm";
import {Button, Container, Row, Modal, Form, Col} from "react-bootstrap";
import {useContext, useState} from "react";
import DollarContext from "../../hooks/DollarContext"

const MemoryRam = ({ data, dataType, modal=false, dataSize , dataBrand, dataFreq}) =>{

    const {form, update, updateHook,  createMemoryRAM, updateMemoryRAM, clean} = useForm(data)

    let  {name, type, size, freq, brand, dol, sol} = form


    return(
        <Row className={" border border-info p-1 m-1"}>
            <Col md={11}>
                <Row>
                    <Col md="10">
                        <label className="form-label col-auto ">Name</label>
                        <input name="name"
                               type="text"
                               className="form-control col-auto"
                               placeholder="name ejample: Patriot signature line"
                               // defaultValue={''}
                               value={name}
                               onChange={(e)=>update(e)}
                        />
                    </Col>
                    <InputSelect name={"size"} title={"Size"} update={update} select={size} col={2} data={dataSize}/>
                </Row>
            </Col>
            <Col md={1}>
                <Row>
                    <button className="btn btn-success" onClick={modal?createMemoryRAM:updateMemoryRAM}>{modal?"Create":"Save"}</button>
                </Row>
                {/*<Row>*/}
                {/*    <button className="btn btn-primary" onClick={reset}>return</button>*/}
                {/*</Row>*/}
                <Row>
                    <button className="btn btn-info" onClick={clean}>Clean</button>
                </Row>
            </Col>
            <Row>
                <InputSelect name={"type"} title={"type RAM"} update={update} select={type} col={2} data={dataType}/>
                <InputSelect name={"freq"} idCondition={type} title={"Frequency"} update={update} select={freq} col={3} data={dataFreq}/>
                <InputSelect name={"brand"} title={"Brand"} update={update} select={brand} col={3} data={dataBrand}/>
                <Col md="2">
                    <label className="form-label col-auto ">Soles</label>
                    <input name="sol"
                           type="text"
                           className="form-control col-auto"
                           placeholder="S/ 0"
                           //defaultValue={''}
                           value={sol}
                           onChange={(e)=>updateHook(e,"dol")}
                    />
                </Col>
                <Col md="2">
                    <label className="form-label col-auto ">Dollar</label>
                    <input name="dol"
                           type="text"
                           className="form-control col-auto"
                           placeholder="$0"
                           // defaultValue={''}
                           value={dol}
                           // step={1}
                           onChange={(e)=>updateHook(e, "sol")}
                    />
                </Col>
            </Row>
        </Row>
    )
}
export default MemoryRam;