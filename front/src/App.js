import logo from './logo.svg';
//import './App.css';
import {useEffect, useState} from "react";
import ListProject from "./component/ListProject";
import SearchProject from "./component/SearchProject";
import NewProject from "./component/NewProject";
import Proforma from "./component/Proforma";

function App() {

    return (
        <div>
                <div className="p-5">
                        <h1>Proformas</h1>
                        <br/>
                        <Proforma/>
                </div>
                <div className="container">

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <NewProject/>
                        <br/>
                        <SearchProject/>
                        <br/>
                        <ListProject/>

                </div>
        </div>
    );
}

export default App;
