import {Link, } from "react-router-dom";
import connectionAPI from "../../config/axios";
import {useEffect, useState} from "react";

export default function InputProcessor (data){

    const [store, setstore] = useState([]);
    const [select, setselect] = useState("");
    useEffect(()=>{
        //getProjects();
        consultarApi()

    },[])
    useEffect(()=>{
        //getProjects();
        verifySelect()

    },[])
    const verifySelect = async ()=>{
        ///data.id
       // if data
        console.log()
    }
    const  consultarApi = async ()=>    {
        console.log('consultado API principal ')
        const queryProjects = await connectionAPI.get('/store')
        console.log(queryProjects )
        const json = queryProjects.data
        console.log(json)
        setstore(json)

    }

    return(

        <div className="col-md-2">
            <select id="proce_store" className="form-select">
                {
                    store.map(function(p){
                        return(
                            <option selected={data.id===p.id?'selected':''} value={p.id} >{p.name}   </option>
                        )
                    })
                }
            </select>

        </div>

    );
}
