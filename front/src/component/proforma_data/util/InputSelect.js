import connectionAPI from "../../../config/axios"
import {useEffect, useState} from "react";


export default function (props){
    const data= props.DATA
    return(
        <div className={`col-md-`+ props.col}>
            {props.children}
            <select name={props.name}   className="form-select"> {/*value={props.id_select} */}
                <option  key="0">---</option>
                {
                    data.map(function(p, index){
                        return(
                            <option  selected={props.id_select===p.id?'selected':false} value={p.id} key={index}>{p.name}</option>


                        )
                    })
                }
            </select>

        </div>
    )

}