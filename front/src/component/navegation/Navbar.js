import {Link, NavLink} from "react-router-dom";
import React from "react";

export default function NewProject (){
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <form className="d-flex">

                    <NavLink to="/" className={({isActive})=> isActive? "btn btn-success":"btn btn-dark"}>
                        main
                    </NavLink>
                    <NavLink to="/proforma/1" className={({isActive})=> isActive? "btn btn-success":"btn btn-dark"}>
                         Edit 1
                    </NavLink>
                    <NavLink exact={true} to="/proforma/1/view" className={({isActive})=> isActive? "btn btn-success":"btn btn-dark"}>
                        View 1
                    </NavLink>
                    <NavLink exact={true} to="/about" className={({isActive})=> isActive? "btn btn-success":"btn btn-dark"} > {/* activeClassName="active" es del propio navlink*/}
                        about
                    </NavLink>

                </form>
            </div>
        </nav>

    );
}
