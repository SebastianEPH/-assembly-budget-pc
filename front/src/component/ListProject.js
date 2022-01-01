import {useEffect, useState} from "react";

export default function ListProject (p){
    const [projects, setProjects] = useState([]); // array vacio

    useEffect(()=>{
        getProjects();
    },[])

    const getProjects =async () =>{
        const url = 'http://127.0.0.1:5000/api/';
        let url2 = 'https://lucasmoy.dev/data/react/peliculas.json'
        const url3 = 'https://rickandmortyapi.com/api/character'
        const url4 = 'https://jsonplaceholder.typicode.com/todos'

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


        const response = await fetch(url3, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const ga =  await response.json();
        //console.log(ga)
        console.log(ga)
        console.log(ga.results)
        setProjects(ga.results)

    }




    return(
    <div>

        {projects.map(function ( p, index){
            return (
                <div>
                    <h2>N: {index}</h2>
                    <h2>Nombres: {p.name}</h2>
                    <h3>Detalles: {p.details}</h3>
                    <h5>Fecha: {p.date}</h5>
                    <h5>Está activo? {p.active}</h5>
                    <h5>location {p.location.name}</h5>
                    <img src={p.image} alt=""/>
                    <div>
                        <button>Ir a proyecto</button>
                        <button>Archivar</button>
                    </div>

                </div>
            )
        })}

    </div>

);
}

