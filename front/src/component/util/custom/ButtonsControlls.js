import {Check2Circle, Eraser} from "react-bootstrap-icons";
import ModalConfirmation from "../Modal/ModalConfirmation";
import {Col, Row} from "react-bootstrap";
import {TextActive} from "../TextActive";

export const ButtonsControlls = ({data}) =>{
    const {col, modal, databaseAddIf, databaseUpdate, databaseRemove, clean, item_active,onChange } = data
    return(
        <Col  md={col} className={"p-4"}>
            <Row>
                <button className="btn btn-outline-success p-0  " onClick={modal?databaseAddIf:databaseUpdate}>
                    <Check2Circle size={20}/>
                </button>
                <button className="btn btn-outline-info p-0 " onClick={clean}>
                    <Eraser size={20}/>
                </button>
                {!modal && <ModalConfirmation title={`Remove Item`} text={` it can't be reverted`} ok={databaseRemove}/>}
                {!modal &&
                    <Col sm={12}>
                        <input className=" form-check-input   "
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
                    </Col>
                }
            </Row>
        </Col>
    )
}