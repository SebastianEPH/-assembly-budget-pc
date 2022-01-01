import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import ListProject from "./component/ListProject";
import SearchProject from "./component/SearchProject";
import NewProject from "./component/NewProject";

function App() {


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


    return (
       <div className="App">
           <h1>Proyectos</h1>

           <br/>
           <SearchProject/>
           <NewProject/>
           <ListProject/>



       </div>
    );
}

export default App;
