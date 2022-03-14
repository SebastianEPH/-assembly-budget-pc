import  {Fragment} from 'react';
import React from "react";
import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import ListProforma from "./component/ListProforma";
import SearchProject from "./component/SearchProject";
import NewProject from "./component/NewProject";
import Proforma from "./component/Proforma";
import Navbar from "./component/navegation/Navbar";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/proforma/:id" element={<Proforma/>}/>
                <Route path="/" exact element={
                    <div className="container">
                        <NewProject/>
                        <br/>
                        <SearchProject/>
                        <br/>
                        <ListProforma/>
                    </div>
                }/>
                <Route path="/about" element={
                    <div className="container-fluid p-5">
                        <h1>acerca de?? </h1>
                    </div>
                }/>
                <Route path="*" element={<h1>Error 404, el URL no existe </h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;