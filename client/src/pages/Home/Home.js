import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
    render() {
        return(
            <div className="fluid page">
                <div className="jumbotron">
                    <h1 className="display-1 text-center" id="landingPage">BrewTopia</h1>
                </div>
            </div>
        );
    }
}

export default Home;