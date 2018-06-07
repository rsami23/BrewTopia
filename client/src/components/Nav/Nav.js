import React from "react";
import "./Nav.css";
import Logo from "../../images/BT_Logo.png";

const Nav = () => (
    <div className="fluid-container">
        <nav className="navbar navbar-expand-md navbar-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} height="70px" alt="" />
                    </a>
                </ul>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/signin">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/signup">Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Nav;