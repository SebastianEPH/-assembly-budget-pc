import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Project from "./listProjects";

function App() {
    return (
       <div className="App">
           <h1>Proyectos</h1>
           <form action="post">
               <br/>
               <h2>Crear un proyecto nuevo</h2>
               <input type="text" placeholder="Nombre"/>
               <button>Crear</button>
               <br/>
           </form>

           <Project name="PC gaby " details="esta pc nunca se concreto " date="mayo" active="0"/>
           <Project name="PC gaby " details="esta pc nunca se concreto " date="mayo" active="0"/>
           <Project name="PC gaby " details="esta pc nunca se concreto " date="mayo" active="0"/>


           <div>
               <button>Ver proyectos Archivados</button>

           </div>
       </div>
    );
}

export default App;
