import  {Fragment} from 'react';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import ListProject from "./component/ListProject";
import SearchProject from "./component/SearchProject";
import NewProject from "./component/NewProject";
import Proforma from "./component/Proforma";
import Navbar from "./component/navegation/Navbar";

function App() {

    return (
        <Router>
           <div className="btn-group">

           </div>
            <Switch>
                <Route path="/proforma">
                    <Navbar/>
                    <div className="container-fluid p-5">
                        <Proforma/>
                    </div>
                </Route>
                <Route path="/about">
                    <Navbar/>
                    <div className="container-fluid p-5">
                        <h1>acerca de?? </h1>
                    </div>
                </Route>
                <Route path="/" exact>
                    <Navbar/>
                    <br/>
                    <br/>
                    <div className="container">
                        <NewProject/>
                        <br/>
                        <SearchProject/>
                        <br/>
                        <ListProject/>
                    </div>
                </Route>
                <Route path="/:_id" >
                    <Navbar/>
                    <div className="container-fluid p-5">
                        <Proforma/>
                    </div>
                </Route>



            </Switch>

        </Router>
    );
}

export default App;
/*
*     <div className="p-5">
                         <h1>Proformas</h1>
                         <br/>
                         <Proforma/>


                 </div>
                 *
* <div className="container">

                         <NewProject/>
                         <br/>
                         <SearchProject/>
                         <br/>
                         <ListProject/>
                 </div>
                 * */