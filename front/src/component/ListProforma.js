import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import connectionAPI from "../config/axios";

export default function ListProforma (){
    const [projects, setProjects] = useState([]); // array vacio


    const url = 'http://127.0.0.1:5000/api/';

    useEffect(()=>{
        consultarApi()

    },[])



    const getProjects =async () =>{

        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            //mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                "Accept":'application/json',
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Credentials" : true
                //"Access-Control-Allow-Origin": "*",
            },
            //redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        console.log(response)
        console.log('response.data')
        const ga3 =  await response.data
        console.log(ga3)
        console.log('response.text()')
        const ga2 =  await response.text();
        console.log(ga2)
        console.log('response.json ')
        const ga =  await response.json();
        console.log(ga)

        console.log('response.json al de previamente TEXT  ')
        const gar =  await ga2.json();
        console.log(gar)
        //const ga = await response.parse()
        //console.log(ga)
        //console.log(ga)

        //console.log(ga.results)
        //setProjects(ga.results)



    }
    const  consultarApi = async ()=>    {
        console.log('consultado API principal ')
        const queryProjects = await connectionAPI.get('/proforma')
        console.log(queryProjects )
        const json = queryProjects.data
        console.log(json)
        setProjects(json)
    }

    //{projects.map(pro=>
    //    <htmlProject name="PC gaby " details="esta pc nunca se concreto " date="mayo" active="0"/>
    //)}
    // <htmlProject name="PC gaby " details="esta pc nunca se concreto " date="mayo" active="0"/>
    //{projects.map(pro=>(
    //{projects.map(function ( p, index){
    //    return (<htmlProject name="PC gaby " details="esta pc nunca se concreto " date="mayo" active="0"/>)
    //})}
    // ricki morty
    //<ListProforma index={p.id}  name={p.name} details={p.status} location={p.location.name} date={p.created} active="0" img={p.image}/>

    return(
        <div className="container">
            <div className="row justify-content-center">
                {projects.map(function ( {id, name, details, date, img}, index){
                    return (
                        <div className="card m-2" style={{width: '18rem'}} key={id+index}>
                            <img src={img} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{details}</p>
                                <Link to={`/proforma/`+id} className="btn btn-primary"> {/* `/proforma/${p._id}` */}
                                    Edit
                                </Link>

                                <Link to={`/proforma/`+id} className="btn btn-primary"> {/* `/proforma/${p._id}` */}
                                    View
                                </Link>
                            </div>
                            <div className="card-header-pills">
                                <h6 className="card-subtitle mb-2 text-muted text-end">{date} </h6>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
);
}

