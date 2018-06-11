import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./Signout.css";
import beerImage from "../../images/beer-glass.png";

class Signout extends Component {
    componentDidMount() {
        this.props.logout();
    }

    render(){
        return(
            <div className="container signout"> 
                <div className="row">
                    <div className="col-sm-4">
                        <img id="signoutImg" src={beerImage} alt="" />
                    </div>
                    <div className="col-sm-8">
                        <h1 className="display-1 "> Thanks for Visiting! </h1>
                        <h1 className="display-2"> Go enjoy a brew! </h1>
                    </div>
                </div>
            </div>
        )      
    }
}

export default connect(null, actions)(Signout);