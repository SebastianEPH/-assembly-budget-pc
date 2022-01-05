import {useEffect, useState} from "react";

import connectionAPI from "../config/axios";

export default function ListProject (p){
    const [projects, setProjects] = useState([]); // array vacio


    const url = 'http://127.0.0.1:5000/api/';
    //let url2 = 'https://lucasmoy.dev/data/react/peliculas.json'
    //const url3 = 'https://rickandmortyapi.com/api/character'
    //const url4 = 'https://jsonplaceholder.typicode.com/todos'

    useEffect(()=>{
        //getProjects();
        consultarApi()

    },[])

    const getProjects =async () =>{


        //const resultado = await fetch(url
        //   , {
        //    //"method": 'GET',
        //        "mode": 'no-cors'
        //    //"headers": {
        //    //    "Accept":'application/json',
        //    //    "Content-Type":'application/json'
        //        //"Origin":"dominio de horku " // solo heroku, soluciona cors
        //    }
        //);
        //console.log(resultado)
        //alert(resultado)
        //const data = await resultado.json;
        //setProjects(data);

        //try {
        //    const res = await fetch(url4);
//
        //    console.log(res.status)
        //    //alert(res.status)
//
        //    if (!res.ok){
        //        alert('error en el url ')
        //    }else{
        //        console.log(res.json())
        //        //const ga = res.json()
        //        //setProjects(ga)
//
        //    }
//
        //}catch(err){
        //    alert(err);
        //}finally{
//
        //}

        //const response = await fetch(url, {
        //    method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //    mode: 'no-cors', // no-cors, *cors, same-origin
        //    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //    credentials: 'same-origin', // include, *same-origin, omit
        //    headers: {
        //        'Content-Type': 'application/json',
        //        // 'Content-Type': 'application/x-www-form-urlencoded',
        //        "Access-Control-Allow-Credentials" : true,
        //        "Access-Control-Allow-Origin": "*",
        //    },
        //    //redirect: 'follow', // manual, *follow, error
        //    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //    //body: JSON.stringify(data) // body data type must match "Content-Type" header
        //});
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
        console.log('consultado API ')
        const queryProjects = await connectionAPI.get('/')
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
    //<ListProject index={p.id}  name={p.name} details={p.status} location={p.location.name} date={p.created} active="0" img={p.image}/>

    return(
        <div className="container">
            <div className="row justify-content-center">
                {projects.map(function ( p, index){
                    return (
                        <div className="card m-2" style={{width: '18rem'}}>
                            <img src={p.img} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.details}</p>
                                <a href=""  className="btn btn-primary ">ver</a>
                            </div>
                            <div className="card-header-pills">
                                <h6 className="card-subtitle mb-2 text-muted text-end">{p.date} </h6>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
);
}

