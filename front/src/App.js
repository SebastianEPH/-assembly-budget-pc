import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./App.css"

import ListProforma from "./component/ListProforma";
import Proforma from "./component/Proforma";
import Navbar from "./component/navegation/Navbar";
import {DollarProvider} from "./component/hooks/DollarContext"
import {MessageProvider} from "./component/hooks/MessageContext";

function App() {
    return (
        <MessageProvider>
            <DollarProvider>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/proforma/:proforma_id"  exact element={<Proforma/>}/>
                        <Route path="/" exact element={
                            <div className="container">
                                <br/>
                                {/*<SearchProject/>*/}
                                {/*<br/>*/}
                                <ListProforma/>
                                <br/>
                            </div>
                        }/>
                        <Route path="/about" element={
                            <div className="container-fluid">
                                <h1>acerca de?? </h1>
                            </div>
                        }/>
                        <Route path="*" element={<h1>Error 404, el URL no existe </h1>}/>
                    </Routes>
                </BrowserRouter>
            </DollarProvider>
        </MessageProvider>

    );
}

export default App;