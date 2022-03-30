import ButtonModal from "../../util/ButtonModal";
import {Modal} from "react-bootstrap";
import {useState} from "react";
import Keyboard from "./Keyboard";
import "../../util/ModalCSS.css"

const ModalKeyboard = ({ data}) =>{
    const {proforma_id, reloadForDB,theme,dataStore,dataBrand} = data
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <ButtonModal
                name="Add Keyboard"
                icon_size="60"
                theme={theme}
                funct={handleShow}
            />
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                // contentClassName={"my-modalp"}
                size={"xl"}
                keyboard={false}
            >
                <div className="modal-header mooo">
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Keyboard
                    </Modal.Title>
                    <button type="button" onClick={handleClose} className="btn-close btn-close_" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                             className="bi bi-x-lg" >
                            <path fillRule="event"
                                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fillRule="event"
                                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </button>
                </div>

                <Modal.Body className={"mooo"}>
                    <Keyboard
                        data={{
                            proforma_id,
                            store:'',
                            brand:'',
                            link:'',
                            select:'',
                            name:'',
                            item_active:1,
                            sol:0,
                            dol:0
                        }}
                        theme={theme}
                        reloadForDB ={reloadForDB}
                        modal={true}
                        dataStore={dataStore}
                        dataBrand={dataBrand}
                        modalHandleClose={handleClose}
                    />

                </Modal.Body>
            </Modal>
        </>
    )
}
export default ModalKeyboard;