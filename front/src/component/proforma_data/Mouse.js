import {useForm} from "../hooks/useForm";
import {TextActive} from "../util/TextActive";
import {Col, Row} from "react-bootstrap";
import {InputsCustom} from "../util/custom/InputsCustom";
import InputSelect from "../util/InputSelectC";
import {ButtonsControlls} from "../util/custom/ButtonsControlls";


export const Mouse = ({data, others, modalHandleClose}) =>{
    const {modal,dataBrand, reloadForDB, dataStore} = others

    const nameDiv = 'mouse'
    const {databaseAddIf, databaseRemove, databaseUpdate, onChange, updateHook, clean,form} = useForm(data, nameDiv, modalHandleClose,reloadForDB )
    let  {name, id,  index, store, brand, link, item_active, dol, sol } = form

    return(
        <div className="accordion" id={nameDiv+'_'+id}>
            <div className="accordion-item">
                {!modal &&
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapseOne_${nameDiv}_${id}`} aria-expanded="false" >
                            <b className={"me-3"}>Mouse {index !== 0 && `${(index+1)}`}: </b> {name} <TextActive data={{state:item_active, center:false}}/>
                        </button>
                    </h2>
                }
                <div id={`panelsStayOpen-collapseOne_${nameDiv}_${id}`} className={!modal&& "accordion-collapse collapse"}>
                    <Row className="accordion-body">
                        <Col md={11}>
                            <Row className={"pe-2 ps-2 pt-2"}>
                                <InputsCustom data={{col:12,name:"name", placeHolder:"insert name", value:name, onChange, updateHook:""}}/>
                                <InputSelect col={3} name={"store"} title={"Store"} update={onChange} select={store}  data={dataStore}/>
                                <InputSelect col={3} name={"brand"} title={"brand"} update={onChange} select={brand}  data={dataBrand}/>
                                <InputsCustom data={{col:3 ,name:"sol", placeHolder:"Soles", value:sol, onChange:updateHook, updateHook:"dol"}}/>
                                <InputsCustom data={{col:3 ,name:"dol",  placeHolder:"Dollar", value:dol, onChange:updateHook, updateHook:"sol"}}/>
                                <InputsCustom data={{col:12 ,name:"link",type:"link",  placeHolder:"Link", value:link, onChange}}/>

                            </Row>
                        </Col>
                        <ButtonsControlls data={{modal,
                            databaseAddIf,
                            databaseUpdate,
                            databaseRemove,
                            clean,
                            col:1,
                            onChange,
                            item_active}}/>
                    </Row>
                </div>
            </div>
        </div>
    )
}

// const Mouse = ({ data,
//                        modal=false,
//                        reloadForDB=[],
//                        theme=[],
//                        dataBrand=[],
//                        dataStore=[],
//                        modalHandleClose = []}) =>{
//
//     const nameDiv = 'mouse'
//     const {databaseAddIf, databaseRemove, databaseUpdate, update, updateHook, clean,form} = useForm(data, nameDiv, modalHandleClose,reloadForDB )
//     let  {name, id,  store, brand, link ,item_active, dol, sol} = form
//
//     return(
//         <div id={nameDiv+'_'+id} className={` border-${theme}`}>
//             <Card  className={modal? 'm-1': 'm-2'}  >
//                 <Card.Body>
//                     <Card.Text>
//                         <Row >
//                             <Col md={11}>
//                                 <FloatingLabel  label="Name">
//                                     <Form.Control name="name"  type="text" placeholder="insert Name"  value={name}
//                                                   onChange={(e)=>update(e)}/>
//                                 </FloatingLabel>
//                                 <Row>
//                                     <InputSelect name={"brand"} title={"Brand"} update={update} select={brand} col={2} data={dataBrand}/>
//                                     {/*<InputSelect name={"memory"} title={"Memory Size"} update={update} select={memory} col={2} data={dataSize}/>*/}
//                                      <Col md={3}>
//                                         <FloatingLabel  label="Soles">
//                                             <Form.Control name="sol"
//                                                           type="text"
//                                                           placeholder="S/ 0"
//                                                           value={sol|| ""}
//                                                           onChange={(e)=>updateHook(e,"dol")}
//                                             />
//                                         </FloatingLabel>
//                                     </Col>
//                                     <Col md={3}>
//                                         <FloatingLabel label="Dollar">
//                                             <Form.Control name="dol" type="text" className="form-control "
//                                                           placeholder="$ 0" value={dol|| ""} onChange={(e)=>updateHook(e, "sol")}
//                                             />
//                                         </FloatingLabel>
//                                     </Col>
//                                     <Col md={10}>
//                                         <FloatingLabel  label="Link">
//                                             <Form.Control name="link"
//                                                           type="link"
//                                                           placeholder="link"
//                                                 // defaultValue={''}
//                                                           value={link}
//                                                           onChange={(e)=>update(e)}/>
//                                         </FloatingLabel>
//                                     </Col>
//                                     <InputSelect name={"store"}  title={"Store"} update={update} select={store}  col={2} data={dataStore}/>
//                                 </Row>
//                             </Col>
//                             <Col md={1}>
//                                 <div className="d-grid gap-2 ">
//                                     <button className="btn btn-outline-success" onClick={modal?databaseAddIf:databaseUpdate} >
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
//                                              className="bi bi-check-circle" viewBox="0 0 20 20" >
//                                             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//                                             <path
//                                                 d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
//                                         </svg></button>
//                                     <button className="btn btn-outline-info" onClick={clean}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
//                                              className="bi bi-eraser"  viewBox="0 0 20 20">
//                                             <path
//                                                 d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
//                                         </svg>
//                                     </button>
//                                     {modal?"": <ModalConfirmation title={`Remove Item`} text={` it can't be reverted`} ok={databaseRemove}/>}
//                                     {modal?"":
//                                         <div className="input-group ">
//                                             <div className="form-check form-switch ">
//                                                 <input className="form-check-input"
//                                                        name="item_active"
//                                                        type="checkbox"
//                                                        role="switch"
//                                                     // checked={select}
//                                                        value={item_active}
//                                                        defaultChecked={item_active}
//                                                        onChange={(e)=>{
//                                                            e.target.value = e.target.checked? '1':'0'
//                                                            update(e)
//                                                        }}/>
//                                                 <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{item_active==="1"||  item_active===1? 'Active':'Disable'}</label>
//                                             </div>
//                                         </div>
//                                     }
//                                 </div>
//                             </Col>  {/*Buttons zone*/}
//                         </Row>
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//         </div>
//     )
// }
//
// export default Mouse;