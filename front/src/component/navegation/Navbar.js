import {Link, NavLink} from "react-router-dom";
import React from "react";

export default function NewProject (){

    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        <Link to="/" className="btn btn-dark">
                            onlylink principal
                        </Link>

                        <NavLink to="/about" className="btn btn-dark" activeClassName="active">
                        navlink about
                        </NavLink>

                    </form>
                </div>
            </nav>

        </div>
    );
}
