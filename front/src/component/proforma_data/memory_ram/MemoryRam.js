import InputSelect from "../../util/InputSelect";
import {useForm} from "../../hooks/useForm";
import {Button, Container, Row, Modal, Form, Col} from "react-bootstrap";
import {useContext, useState} from "react";
import {UserContext} from "../../hooks/UserContext"


const MemoryRam = ({ data, dataType, dataSize , dataBrand, dataFreq}) =>{

    const {form, update, updateHook, save, reset} = useForm(data)

    let  {name, type, size, freq, brand, dol, sol} = form

    const {dollar, setDollar} = useContext(UserContext );

    console.log("Type change ",dollar)




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
                    <button className="btn btn-success" onClick={save}>Save</button>
                </Row>
                {/*<Row>*/}
                {/*    <button className="btn btn-primary" onClick={reset}>return</button>*/}
                {/*</Row>*/}
                <Row>
                    <button className="btn btn-danger" onClick={reset}>Clean</button>
                </Row>
            </Col>
            <Row>
                <InputSelect name={"type"} title={"type RAM"} update={update} select={type} col={2} data={dataType}/>
                <InputSelect name={"freq"} idCondition={type} title={"Frequency"} update={update} select={freq} col={3} data={dataFreq}/>
                <InputSelect name={"brand"} title={"Brand"} update={update} select={brand} col={3} data={dataBrand}/>
                <Col md="2">
                    <label className="form-label col-auto ">Soles</label>
                    <input name="sol"
                           type="number"
                           className="form-control col-auto"
                           placeholder="S/ 0"
                           //defaultValue={''}
                           value={sol}
                           pattern={"[0-9]{10}"}
                           onChange={(e)=>updateHook(e,"dol")}
                    />
                </Col>
                <Col md="2">
                    <label className="form-label col-auto ">Dollar</label>
                    <input name="dol"
                           type="number"
                           className="form-control col-auto"
                           placeholder="$0"
                           pattern={"[0-9]{10}"}
                           // defaultValue={''}
                           value={dol}
                           onChange={(e)=>updateHook(e, "sol")}
                    />
                </Col>
            </Row>
        </Row>
    )
}
export default MemoryRam;