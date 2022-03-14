import connectionAPI from "../../../config/axios"
import {useEffect, useState} from "react";
import { Col} from "react-bootstrap";
import PropTypes from "prop-types";
import ShowMotherboard from "../motherboard/ShowMotherboard";


/**
 * Element Select / option
 * @param {String} name name from
 * @param {String} title name from
 * @param {Number|String} id_select select id
 * @param {Number|String} col stress module => form-select-`col-number`
 * @param {Array<$ObjMap>} data Data list
 * @return {JSX.Element}
 */
export default function ({name, title ,select, col, update, data, idCondition}){
    return(
        <Col md={col}>
            {title !== undefined &&  <label className="form-label col-auto ">{title}</label>}
            <select name={name}  value={select} onChange={(e)=>update(e)} className="form-select"> {/*value={props.id_select} */}
                <option value={null} key="0">---</option>
                {data.map((p, index)=>{
                    if(!p.type){
                        return<option value={p.id} key={index+p.id}>{p.name}</option>
                    }else{
                        if (idCondition.toString() === p.type.toString()){
                            return<option value={p.id} key={index+p.id}>{p.name}</option>
                        }
                    }
                })}
            </select>
        </Col>
    )

}


ShowMotherboard.protoTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    id_select: PropTypes.string.isRequired,
    col: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired
}

