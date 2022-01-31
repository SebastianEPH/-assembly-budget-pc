import {Link, } from "react-router-dom";
import connectionAPI from "../../config/axios";
import {useEffect, useState} from "react";

export default function InputProcessor (data){

    const [store, setstore] = useState([]);
    useEffect(()=>{
        //getProjects();
        consultarApi()

    },[])

    const  consultarApi = async ()=>    {
        console.log('consultado API principal ')
        const queryProjects = await connectionAPI.get('/store')
        console.log(queryProjects )
        const json = queryProjects.data
        console.log(json)
        setstore(json)
    }

    return(

        <div className={`col-md-`+ data.col}>
            {data.children}
            <select name="store" id={data.id} className="form-select">
                <option value="">---</option>
                {
                    store.map(function(p){
                        return(

                            <option selected={data.id_select===p.id?'selected':false} value={p.id} >{p.name}</option>
                        )
                    })
                }
            </select>

        </div>

    );
}
