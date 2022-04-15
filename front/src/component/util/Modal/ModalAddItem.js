import {Modal} from "react-bootstrap";
import {useState} from "react";
import "../ModalCSS.css"
import {XLg, PlusCircleDotted} from "react-bootstrap-icons";

export const ModalAddItem = ({data}) =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {Item} = data
    return(
        <>
            <div className="col-auto justify-content-center p-2 m-2 " onClick={handleShow}>
                <button type="button" >
                    <h4>{data.name}</h4>
                    <br/>
                    <PlusCircleDotted size={60} />
                </button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                size={"xl"}
                keyboard={false}
            >
                <div className="modal-header">
                    <Modal.Title id="contained-modal-title-vcenter">
                        {data.name}
                    </Modal.Title>
                    <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <XLg/>
                    </button>
                </div>
                <Modal.Body>
                    <Item data={data.information} others={data.others} modalHandleClose={handleClose}/>
                </Modal.Body>
            </Modal>
        </>
    )
}