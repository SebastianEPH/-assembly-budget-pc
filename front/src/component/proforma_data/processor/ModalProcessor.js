import ButtonModal from "../../util/ButtonModal";
import {Modal} from "react-bootstrap";
import {useState} from "react";
import Processor from "./Processor";
import "../../util/ModalCSS.css"

const ModalMemoryRam = ({ proforma_id, theme,  processorType, dataStore, reloadForDB }) =>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <ButtonModal
                name="Add Processor"
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
                        Add Processor
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
                    <Processor
                        data={{
                            store:'',
                            proforma_id,
                            brand:'',
                            link:'',
                            select:'',
                            name:'',
                            item_active:1,
                            sol:0,
                            dol:0
                            }}
                        theme={theme}
                        proforma_id={proforma_id}
                        modalHandleClose ={handleClose}
                        reloadForDB ={reloadForDB }
                        modal={true} // if true, then use added, otherwise use update function
                        dataStore={dataStore}
                        processorType={processorType}>

                    </Processor>

                </Modal.Body>
            </Modal>
        </>
    )
}
export default ModalMemoryRam;