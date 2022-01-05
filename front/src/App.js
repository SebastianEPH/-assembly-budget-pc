import logo from './logo.svg';
//import './App.css';
import {useEffect, useState} from "react";
import ListProject from "./component/ListProject";
import SearchProject from "./component/SearchProject";
import NewProject from "./component/NewProject";

function App() {

    return (
        <div className="container">
            <h1>Proformas</h1>
            <br/>
            <NewProject/>
            <br/>
            <SearchProject/>
            <br/>
            <ListProject/>



        </div>
    );
}

export default App;
