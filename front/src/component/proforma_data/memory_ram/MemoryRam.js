import InputSelect from "../util/InputSelect";
import {useForm} from "../hooks/useForm";
import {Button, Container, Row, Modal, Form, Col} from "react-bootstrap";
import {useState} from "react";

const MemoryRam = ({ data, dataType, dataSize , dataFreq}) =>{

    const {form, update, save, reset} = useForm(data)

    let  {name, type, size, freq} = form


    // const [fre, setFre]  = useState({});
    // console.table("data, type : ", data.type +"   "+ name)
    // console.table("type solo: ", type+ "    "+ name )

    // if(data.type === fre)
    // console.log("esto es el tipe ",type)
    // console.table(dataType)
    // console.log('type ',type)
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
                <Row>
                    <InputSelect name={"type"} title={"type RAM"} update={update} select={type} col={6} data={dataType}/>
                    <InputSelect name={"freq"} idCondition={type} title={"Frequency"} update={update} select={freq} col={6} data={dataFreq}/>
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
        </Row>
    )
}
export default MemoryRam;