import {Button, Col, FloatingLabel, Form, Modal, ModalFooter, Row} from "react-bootstrap";
import {useState} from "react";
import "../component/util/ModalCSS.css"
import connectionAPI from "../config/axios";
import toast from "react-hot-toast";
// import {useNavigate} from "react-router-dom";

const ModalNewProforma = ({ data}) =>{
    const {title, reloadForDB, idUser = ''} = data
    console.log(data)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const acepted = () =>{
        handleClose()
        create()
    }

    const [form, setForm]  = useState([]);
    const create = async()=>{
        await connectionAPI.post(`/proforma/`,form)
            .then((m)=>{
                toast.success(m.data.message)
                // clean(false) // clean  inputs
                //
                // const navigate = useNavigate();
                // navigate(`/${idUser}`);
            })
            .catch((m)=>{
                toast.error(m.response.data.message)
            })
        handleClose()
        setForm({name:""})
        reloadForDB()
    }

    const update = ({target}) => {
        setForm({...form, [target.name]: target.value})
    }

    let  {name } = form

    return(
        <>
            <button type="submit" onClick={handleShow} className="collection-button bottom fw-bold">Create new Proforma</button>

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
                        {title}
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
                    <Row>
                        <FloatingLabel   label="Name">
                            <Form.Control name="name"  type="text" placeholder="insert Name"  value={name}
                                          onChange={(e)=>update(e)}/>
                        </FloatingLabel>
                    </Row>
                </Modal.Body>
                <ModalFooter className={"mooo"}>
                    <Button className={"btn-danger"} onClick={acepted}>
                        Create
                    </Button>
                    <Button className={"btn btn-success"} onClick={handleClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default ModalNewProforma;