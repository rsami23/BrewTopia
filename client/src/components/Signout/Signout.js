import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./Signout.css";
// import beerImage from "../../images/beer-glass.png";

class Signout extends Component {
    componentDidMount() {
        this.props.logout();
    }

    render(){
        return(
            <div className="container signout"> 
                <h1 className="display-1">Thanks for Visiting</h1>
                <h1 className="display-2 line-two">Go enjoy a brew!</h1>
            </div>
        )      
    }
}

export default connect(null, actions)(Signout);