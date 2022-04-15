import {Check2Circle, Eraser} from "react-bootstrap-icons";
import ModalConfirmation from "../Modal/ModalConfirmation";
import {Col, Row} from "react-bootstrap";
import {TextActive} from "../TextActive";

export const ButtonsControlls = ({data}) =>{
    const {col, modal, databaseAddIf, databaseUpdate, databaseRemove, clean, item_active,onChange } = data
    return(
        <Col  md={col} className={"m-0 p-4"}>
            <Row className={""}>
                <button className="btn btn-outline-success p-0 m-0 " onClick={modal?databaseAddIf:databaseUpdate}>
                    <Check2Circle size={20}/>
                </button>
                <button className="btn btn-outline-info p-0 m-0 " onClick={clean}>
                    <Eraser size={20}/>
                </button>
                {!modal && <ModalConfirmation title={`Remove Item`} text={` it can't be reverted`} ok={databaseRemove}/>}
                {!modal &&
                    <Row className="">
                        <input className=" form-check-input form-check form-switch m-1"
                               name="item_active"
                               type="checkbox"
                               role="switch"
                               value={item_active}
                               defaultChecked={item_active}
                               onChange={(e)=>{
                                   e.target.value = e.target.checked? '1':'0'
                                   onChange(e)
                               }}/>
                        <TextActive data={{state:item_active, center: true}}/>
                    </Row>
                }
            </Row>
        </Col>
    )
}