import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import connectionAPI from "../../../config/axios";
import InputSelect from "../util/InputSelect";
import ButtonModal from "../util/ButtonModal";

export default function ModalAddProcessor (){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [pro, setPro] = useState({
        //id: ,
        name: "",
        link: "",
        active: "",
        store: "",
        price_dol: "",
        price_sol: ""
    }) // para form

    const handleChangeProcessor = (e) =>{
        console.log(e.target.name, e.target.value)
        setPro({...pro, [e.target.name]: e.target.value})
    }


    const saveProcessor = async() =>{
        console.log('save procesor ')

        const queryprocessor = await connectionAPI.post(`/proforma/1/processor`, pro)
        //console.log(queryProjects )
        /*
        const json = queryProjects.data
        console.log('esto es el proforma normal')
        console.log(json)
        console.log('esto es el processreor')
        console.log(json[0].processor)
        setproforma(json)
        setprocessor(json[0].processor)
        */
    }

    return(
    <>
        {/*
        <Button variant="primary" onClick={handleShow}>
            Added new processor
        </Button>
         */}

        <ButtonModal
            name="Add new Processor"
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
                <Modal.Title>Add New Processor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div onChange={handleChangeProcessor} className="border border-danger">
                    <div className="row p-1">
                        <div className="col-md-12">
                            <div className="input-group">
                                <label className="form-label col-auto ">Processor</label>
                                <div className="form-check form-switch col-auto">
                                    <input name="active" onChange={handleChangeProcessor} className="form-check-input" type="checkbox" role="switch" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Predeterminado</label>
                                </div>
                            </div>
                            <input name="name"  type="text" className="form-control col-auto"  placeholder="Name and model"   />
                        </div>{/* input */}
                    </div>
                    <div className="row p-1">
                        <div className="col-md-12">
                            <div className="input-group">
                                <div className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-link-45deg" viewBox="0 0 16 16">
                                        <path
                                            d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                        <path
                                            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                                    </svg></div>
                                <input name="link" onChange={handleChangeProcessor} type="link" className="form-control" placeholder="Link" />
                                <a className="btn btn-primary" href={`{}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-box-arrow-up-right" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                        <path fillRule="evenodd"
                                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                    </svg></a>
                            </div>
                        </div>{/* link */}
                    </div>

                    <div className="row p-1">

                        <InputSelect name="store_id" col="4" URL="/store">
                            <label className="form-label col-auto ">Store 2</label>
                        </InputSelect>

                        <InputSelect name="brand_id" col="3" URL="/brand">
                            <label className="form-label col-auto ">Brand 2</label>
                        </InputSelect>

                        <div className="col-md-5">
                            <label htmlFor="inputCity" className="form-label">Price</label>
                            <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input name="price_dol" onChange={handleChangeProcessor } type="text" className="form-control" id="proce_dolar"
                                       placeholder="0" />
                                <div className="input-group-text">S/</div>
                                <input name="price_sol" onChange={handleChangeProcessor } type="text" className="form-control" id="proce_Sol"
                                       placeholder="0" readOnly/>
                            </div>
                        </div>{/* Price */}
                        {/*<Link to={'/'} method='post' className="btn btn-primary col-md-1">Save</Link>*/}
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button type="submit" onClick={saveProcessor} variant="success">Save</Button>
            </Modal.Footer>
        </Modal>
    </>

    )

}