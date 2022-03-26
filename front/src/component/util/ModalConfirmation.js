import {Button, Modal, ModalFooter} from "react-bootstrap";
import {useState} from "react";

const ModalComponent = ({title, text, ok}) =>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const acepted = () =>{
        handleClose()
        ok()
    }

    return(
        <>

            <button className="btn btn-outline-danger" onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                     className="bi bi-trash3" >
                    <path
                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                contentClassName={"my-modalp"}
                size={"sm"}
                keyboard={false}
            >
                <div className="modal-header">
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                    <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                             className="bi bi-x-lg" >
                            <path fillRule="evenodd"
                                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fillRule="evenodd"
                                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </button>
                </div>

                <Modal.Body>
                        {text}
                </Modal.Body>
                <ModalFooter>
                    <Button className={"btn-danger"} onClick={acepted}>
                        Ok
                    </Button>
                    <Button className={"btn btn-success"} onClick={handleClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default ModalComponent;