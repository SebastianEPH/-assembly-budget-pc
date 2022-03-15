import ButtonModal from "../../util/ButtonModal";
import {Button, Container, Row, Modal, Form, Col} from "react-bootstrap";
import {useState} from "react";
const ModalMemoryRam = ({children, title}) =>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <ButtonModal
                name={title}
                size="15"
                icon_size="60"
                funct={handleShow}
            />

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                contentClassName={"my-modalp"}
                size={"xl"}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalMemoryRam;