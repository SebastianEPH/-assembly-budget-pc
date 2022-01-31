import {Link, NavLink} from "react-router-dom";
import React from "react";

export default function NewProject (){

    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex">
                        <NavLink to="/about" className={({isActive})=> isActive? "btn btn-success":"btn btn-dark"} > {/* activeClassName="active" es del propio navlink*/}
                        about
                        </NavLink>
                        <NavLink to="/" className={({isActive})=> isActive? "btn btn-success":"btn btn-dark"}>
                            main
                        </NavLink>
                        <NavLink to="/proforma/1" className={({isActive})=> isActive? "btn btn-success":"btn btn-dark"}>
                             item 1
                        </NavLink>

                    </form>
                </div>
            </nav>

        </div>
    );
}
