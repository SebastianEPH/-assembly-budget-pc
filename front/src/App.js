import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Project from "./Projects";

function App() {
    const [projects, setProjects] = useState([]); // array vacio

    useEffect(()=>{
        getProjectsr();
    },[])

    const getProjectsr =async () =>{
        const url = 'http://127.0.0.1:5000/api/';
        //let url2 = 'https://lucasmoy.dev/data/react/peliculas.json'
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
        console.log(ga.results)
        setProjects(ga.results)

    }



    //{projects.map(pro=>
    //    <htmlProject name="PC gaby " details="esta pc nunca se concreto " date="mayo" active="0"/>
    //)}
    // <htmlProject name="PC gaby " details="esta pc nunca se concreto " date="mayo" active="0"/>
    //{projects.map(pro=>(
    //{projects.map(function ( p, index){
    //    return (<htmlProject name="PC gaby " details="esta pc nunca se concreto " date="mayo" active="0"/>)
    //})}




    return (
       <div className="App">
           <h1>Proyectos</h1>


           <br/>

           {projects.map(function ( p, index){
               return (
                   <Project  index={p.id}  name={p.name} details={p.status} location={p.location.name} date={p.created} active="0" img={p.image}/>
               )
           })}

           <br/>
           <h5>?????</h5>

           <div>
               <button>Ver proyectos Archivados</button>
               <br/>
               <h5>dfgdfgdf</h5>
           </div>
       </div>
    );
}

export default App;
