import React from "react";
import 'bootswatch/dist/lumen/bootstrap.min.css'; // Added this :boom:
import 'bootstrap/js/src/util/index'
import {
    BrowserRouter,
    Routes,
    Route, HashRouter,
} from "react-router-dom";

import ListProforma from "./component/ListProforma/ListProforma";
import Proforma from "./component/proforma_items/Proforma";
import Navbar from "./component/navegation/Navbar";
import {DollarProvider} from "./component/hooks/DollarContext"

function MainApp() {
    return (
        <HashRouter>
            <DollarProvider>
            <Navbar/>
                <Routes>
                    <Route path="/proforma/:proforma_id"  exact element={<Proforma/>}/>
                    <Route path="/" exact element={<ListProforma/>}/>
                    <Route path="*" element={<h1>Error 404, el URL no existe </h1>}/>
                </Routes>
            </DollarProvider>
        </HashRouter>

    );
}

export default MainApp;