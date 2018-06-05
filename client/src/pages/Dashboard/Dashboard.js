import React, { Component } from "react";
import AddBeer from "../../components/AddBeer";
import "./Dashboard.css";

class Dashboard extends Component {
    handleFormSubmit = event => {
        event.preventDefault();
        
    }


    render() {
        return(
            <div className="container">
                {/* Top Rated Beers */}
                <div id="topRated">
                    <h1 className="display-4 topRatedTitle">Top Rated Brews</h1>
                    <div className="topRatedBrews">
                    </div>
                </div>
                {/* Add Beer Form */}
                <AddBeer
                    handleFormSubmit={this.handleFormSubmit}
                />
                
            </div>
        );
    }
}

export default Dashboard;