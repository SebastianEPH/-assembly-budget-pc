import React from "react";
import {
    BrowserRouter,
    Routes,
    Route, HashRouter,
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
                <HashRouter>
                    {/*<BrowserRouter>*/}
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
                                <div className="container">
                                    <br/>
                                    <br/>
                                    <h1 className={"text-center"}>About</h1>
                                    <br/><br/>
                                    <br/>
                                    <div className="card" style={{"max-width":" 15rem;"}}>
                                        <div className="row g-0">

                                            <div className="col">
                                                <div className="card-body">
                                                    <h3 className="card-title text-center text-white ">SebastiánEPH
                                                        <br/>
                                                        <a className={"text-center"} href= "https://github.com/SebastianEPH/"><img src="https://img.shields.io/github/followers/SebastianEPH?style=social"/> </a>
                                                    </h3>
                                                    <p className={"text-center"}>
                                                        {/*<a> <img src="icons/gamemaker.png"  width="40" height="40"/> </a>*/}
                                                        <a> <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg" width="40" height="40" alt={""}/> </a>
                                                        <a> <img src="https://cdn0.iconfinder.com/data/icons/web-social-and-folder-icons/512/Unity_3D.png" width="40" height="40"/> </a>
                                                        <a> <img src="https://telegramturkiye.com/wp-content/uploads/2019/12/BotFather.jpg" width="40" height="40"/> </a>
                                                        <a> <img src="https://www.vectorlogo.zone/logos/android/android-icon.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original-wordmark.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-plain-wordmark.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" width="40" height="40"/> </a>
                                                        {/*<a> <img src="icons/reactjs.svg" width="40" height="40"/> </a>*/}
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://cdn.iconscout.com/icon/free/png-512/handlebars-282936.png" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-plain-wordmark.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" width="40" height="40"/> </a>

                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" width="40" height="40"/> </a>
                                                        {/*<a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg" width="40" height="40"/> </a>*/}
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://www.armadilloamarillo.com/wp-content/uploads/logo_android_studio_512dp.png" width="40" height="40"/> </a>
                                                        <a> <img src="https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png" width="40" height="40"/> </a>
                                                        <a> <img src="https://resources.jetbrains.com/storage/products/webstorm/img/meta/webstorm_logo_300x300.png" width="40" height="40"/> </a>
                                                        <a> <img src="https://resources.jetbrains.com/storage/products/pycharm/img/meta/pycharm_logo_300x300.png" width="40" height="40"/> </a>
                                                        <a> <img src="https://github.com/SebastianEPH/SebastianEPH/raw/master/icons/heidi-sql.png" width="40" height="40"/> </a>
                                                        <a> <img src="https://github.com/SebastianEPH/SebastianEPH/raw/master/icons/eth.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://github.com/SebastianEPH/SebastianEPH/raw/master/icons/matic.svg" width="40" height="40"/> </a>
                                                        <a> <img src="https://github.com/SebastianEPH/SebastianEPH/raw/master/icons/bnb.svg" width="40" height="40"/></a>
                                                    </p>
                                                    <p className="card-text">
                                                        <p align="center"><img src="https://profile-counter.glitch.me/{SebastianEPH}/count.svg"/></p>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"text-center"}>
                                        <p align="center">
                                            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=SebastianEPH&langs_count=10&theme=chartreuse-dark&layout=compact"/>
                                        </p>

                                        <p align="center">
                                            <img src="https://github-readme-stats.vercel.app/api?username=SebastianEPH&show_icons=true&theme=chartreuse-dark"/>
                                        </p>
                                    </div>
                                </div>
                            }/>
                            <Route path="*" element={<h1>Error 404, el URL no existe </h1>}/>
                        </Routes>
                    {/*</BrowserRouter>*/}
                </HashRouter>
            </DollarProvider>
        </MessageProvider>

    );
}

export default App;