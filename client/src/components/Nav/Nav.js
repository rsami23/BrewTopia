import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Nav.css";
import Logo from "../../images/BT_Logo.png";

class Nav extends Component {
    renderLinks() {
        if(this.props.authenticated){
            return (
                <div className="nav_links">
                    <Link className="nav-link" to="/brewery">
                        Brewery
                    </Link>
                    <Link className="nav-link" to="/dashboard">
                        Dashboard
                    </Link>
                    <Link className="nav-link" to="/signout">
                        Sign Out
                    </Link>
                </div>
            )
        } else {
            return (
                <div className="nav_links">
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                    <Link className="nav-link" to="/signin">
                        Login
                    </Link>
                    <Link className="nav-link" to="/signup">
                        Signup
                    </Link>
                            
                </div>
            )
        }
    }

    render(){
        return(
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
                            <li>
                                {this.renderLinks()}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Nav);