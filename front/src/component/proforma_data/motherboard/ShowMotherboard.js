import InputSelect from "../../util/InputSelect";
import {useState} from "react";
import connectionAPI from "../../../config/axios";
import {useParams} from "react-router-dom";
import PropTypes from "prop-types"

const ShowMotherboard = ({index, test, motherboard_id, cpu_id, active, name, brand_id, price_dol, price_sol, link ,DATA_brand_processor, DATA_brand})=>{
    const [motherboard, setMotherboard] = useState({
        name: null,
        cpu_id:null,
        brand_id:null,
        //active:"",
        link:null,
        price_dol:null,
        price_sol:null
    })
    const [defaultMotherboard, setDefaultMotherboard] = useState({
        name: name,
        cpu_id:cpu_id,
        brand_id:brand_id,
        //active:"",
        link:link,
        price_dol:price_dol,
        price_sol:price_sol
    })
    console.log(test)
    const {id} = useParams();
    console.log("El ID de le proforma es YTTYTYTYTY : "+ id)


    async function  update (){
        console.log("update")
        console.log(motherboard)

        const update= await connectionAPI.put(`/proforma/${id}/motherboard/${motherboard_id}`,motherboard) //body:JSON.stringify(motherboard)
        console.log(update)
        console.log('creo nque se envio ')

    }
    function clear (){

    }
    function discard(){
        console.log('despues es el default ')
        console.log(defaultMotherboard)
    }


    const handleChange = (e) =>{
        //console.log(e.target.name, e.target.value)

        setMotherboard({...motherboard, [e.target.name]: e.target.value})
        console.table(motherboard)
    }
    //onSubmit={}
    return(

            <div className="border border-info">
                <div className="row p-1"  onChange={handleChange} >
                    <div className="col-md-9">
                        <div className="row">
                            <label className="form-label col-auto ">Motherboard<code>({index+1})</code></label>
                            <div className="form-check form-switch col-auto">
                                <input name="active"  className="form-check-input" type="checkbox"  value="1"
                                       defaultChecked={active === 1? 'checked': ''}/>
                                <label className="form-check-label"  htmlFor="flexSwitchCheckChecked">Predeterminado{active}</label>
                            </div>
                            <input name="name" type="text" className="form-control col-auto" placeholder="Name and model"  defaultValue={name} />
                        </div>
                    </div>{/* input */}

                    <InputSelect name="cpu_id" title={"Socket Type"} id_select={cpu_id}  col="1" data={DATA_brand_processor}/>
                    <InputSelect name="brand_id" title={"Brand"} id_select={brand_id}  col="1" data={DATA_brand}/>
                    <div className="col-md-1">
                        <button style={{width: "100%", height: "100%"}} className="btn btn-danger"  onClick={discard}>
                            Discard
                        </button>
                    </div>{/* Price */}
                </div>
                <div className="row p-1" onChange={handleChange} >
                    <div className="col-md-9">
                        <label className="form-label col-auto ">Link</label>
                        <div className="input-group">
                            <div className="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path
                                        d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                    <path
                                        d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                                </svg></div>
                            <input name="link" type="link" className="form-control" placeholder="Link" defaultValue={link}/>
                            <a className="btn btn-primary" href={`${link}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                     className="bi bi-box-arrow-up-right" viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                    <path fillRule="evenodd"
                                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                </svg></a>
                        </div>
                    </div>{/* link */}

                    <div className="col-md-2">
                        <label htmlFor="inputCity" className="form-label">Price</label>
                        <div className="input-group">
                            <div className="input-group-text">$</div>
                            <input name="price_dol" type="text" className="form-control"
                                   placeholder="0" defaultValue={price_dol}/>
                            <div className="input-group-text">S/</div>
                            <input name="price_sol" type="text" className="form-control"
                                   placeholder="0" defaultValue={price_sol} readOnly/>
                        </div>
                    </div>{/* Price */}
                    <div className="col-md-1">
                        <button style={{width: "100%", height: "100%"}} className="btn btn-success" onClick={update} >
                            Update
                        </button>
                    </div>{/* button save */}
                </div>
            </div>

    )
}

ShowMotherboard.protoTypes = {
    test: PropTypes.string.isRequired
}
ShowMotherboard.defaultProps = {
    test : "soy el texto tesat "
}


export default ShowMotherboard;
