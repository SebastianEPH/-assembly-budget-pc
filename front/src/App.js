import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Project from "./listProjects";

function App() {
    return (
       <div>
           <h1>Proyectos</h1>


           <Project name="PC gaby " details="esta pc nunca se concreto " active="0"/>
           <Project name="PC gaby " details="esta pc nunca se concreto " active="0"/>
           <Project name="PC gaby " details="esta pc nunca se concreto " active="0"/>
       </div>
    );
}

export default App;
