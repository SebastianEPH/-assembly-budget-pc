import {Button, Modal, ModalFooter, Row} from "react-bootstrap";
import {useState} from "react";
import {Trash3, XLg} from "react-bootstrap-icons";

export const ModalDeleteProforma = ({data}) =>{
    const {title, text, ok} = data
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const acepted = () =>{
        handleClose()
        ok()
    }
    return(
        <Row>
            <button  className="btn btn-danger" onClick={handleShow}>
               <Trash3 size={22}/>
                Delete this proforma
            </button >

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                contentClassName={""}
                size={"sm"}
                keyboard={false}
            >
                <div className="modal-header">
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                    <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                       <XLg size={20}/>
                    </button>
                </div>

                <Modal.Body>{text}</Modal.Body>
                <ModalFooter >
                    <Button className={"btn btn-danger"} onClick={acepted}>
                        Delete
                    </Button>
                    <Button className={"btn btn-success"} onClick={handleClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </Row>
    )
}