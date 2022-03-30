import {Link, NavLink} from "react-router-dom";
import React from "react";
import icon from "../../assets/img/icon/icon.png"
export default function NewProject (){
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={icon} alt="" width="35" height="35"
                         className="d-inline-block align-text-top"/>
                       Proforma
                </a>
                <form className="d-flex">
                    <NavLink to="/" className={({isActive})=> isActive? "btn btn-success":"btn btn-dark"}>
                        main
                    </NavLink>

                    <NavLink exact={true} to="/about" className={({isActive})=> isActive? "btn btn-success":"btn btn-dark"} > {/* activeClassName="active" es del propio navlink*/}
                        about
                    </NavLink>

                </form>
            </div>
        </nav>

    );
}
