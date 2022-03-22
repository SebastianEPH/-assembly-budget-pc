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
import {DollarProvider} from "./component/hooks/DollarContext"
import {MessageProvider} from "./component/hooks/MessageContext";

function App() {
    // const [dollar, setDollar] = useState(3.7)
    return (
        <MessageProvider>
            <DollarProvider>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/proforma/:proforma_id" element={<Proforma/>}/>
                        <Route path="/" exact element={
                            <div className="container-fluid">
                                <NewProject/>
                                <br/>
                                <SearchProject/>
                                <br/>
                                <ListProforma/>
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