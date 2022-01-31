import connectionAPI from "../../config/axios"
import {useEffect, useState} from "react";


export default function (props){

    const [store, setstore] = useState([]);
    useEffect(()=>{
        //getProjects();
        consultarApi()

    },[])

    const  consultarApi = async ()=>    {
        console.log('consultado API principal ')
        const queryProjects = await connectionAPI.get(`${props.URL}`)
        console.log(queryProjects )
        const json = queryProjects.data
        console.log(json)
        setstore(json)
    }

    return(
        <div className={`col-md-`+ props.col}>
            {props.children}
            <select name={props.name}   className="form-select"> {/*value={props.id_select} */}
                <option  key="0">---</option>
                {
                    store.map(function(p, index){
                        return(
                            <option  selected={props.id_select===p.id?'selected':false} defaultValue={p.id} key={index}>{p.name}</option>


                        )
                    })
                }
            </select>

        </div>
    )

}