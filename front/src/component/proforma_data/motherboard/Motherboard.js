import {useForm} from "../../hooks/useForm";
import {Card, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import InputSelect from "../../util/InputSelectC";
import ModalConfirmation from "../../util/ModalConfirmation";

const Motherboard = ({ data,
                       modal=false,
                       processorType = [],
                       theme="",
                       dataStore = [],
                       reloadForDB  = [],
                       modalHandleClose = []}) =>{

    const nameDiv = 'motherboard'
    const {databaseAddIf, databaseRemove, databaseUpdate, update, updateHook, clean,form} = useForm(data, nameDiv, modalHandleClose,reloadForDB )
    let  {name, id,  store, type, link ,item_active, dol, sol} = form

    return(
        <div id={nameDiv+'_'+id} className={`border border-${theme}`}>
            <Card className={modal? '': 'm-2'}  >
                {/*className={"border border-danger"}*/}
                {/*<Card.Header>MemoryRAM: {title}</Card.Header>*/}
                <Card.Body>
                    <Card.Text>
                        <Row >
                            <Col md={11}>
                                <FloatingLabel  label="Name">
                                    <Form.Control name="name"  type="text" placeholder="insert Name"  value={name}
                                                  onChange={(e)=>update(e)}/>
                                </FloatingLabel>
                                <Row>
                                    <InputSelect name={"store"}  title={"Store"} update={update} select={store}  col={3} data={dataStore}/>
                                    <InputSelect name={"type"} title={"Type"} update={update} select={type} col={3} data={processorType}/>
                                    <Col md={3}>
                                        <FloatingLabel  label="Soles">
                                            <Form.Control name="sol"
                                                          type="text"
                                                          placeholder="S/ 0"
                                                          value={sol|| ""}
                                                          onChange={(e)=>updateHook(e,"dol")}
                                            />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={3}>
                                        <FloatingLabel label="Dollar">
                                            <Form.Control name="dol" type="text" className="form-control "
                                                          placeholder="$ 0" value={dol|| ""} onChange={(e)=>updateHook(e, "sol")}
                                            />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={12}>
                                        <FloatingLabel  label="Link">
                                            <Form.Control name="link"
                                                          type="link"
                                                          placeholder="link"
                                                // defaultValue={''}
                                                          value={link}
                                                          onChange={(e)=>update(e)}/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>

                            </Col>
                            <Col md={1}>
                                <div className="d-grid gap-2 ">
                                    <button className="btn btn-outline-success" onClick={modal?databaseAddIf:databaseUpdate} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                             className="bi bi-check-circle" viewBox="0 0 20 20" >
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                        </svg></button>
                                    <button className="btn btn-outline-info" onClick={clean}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                             className="bi bi-eraser"  viewBox="0 0 20 20">
                                            <path
                                                d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
                                        </svg>
                                    </button>
                                    {modal?"": <ModalConfirmation title={`Remove Item`} text={` it can't be reverted`} ok={databaseRemove}/>}
                                    {modal?"":
                                        <div className="input-group ">
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input"
                                                       name="item_active"
                                                       type="checkbox"
                                                       role="switch"
                                                    // checked={select}
                                                       value={item_active}
                                                       defaultChecked={item_active}
                                                       onChange={(e)=>{
                                                           e.target.value = e.target.checked? '1':'0'
                                                           update(e)
                                                       }}/>
                                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{item_active==="1"||  item_active===1? 'Active':'Disable'}</label>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </Col>  {/*Buttons zone*/}
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Motherboard;