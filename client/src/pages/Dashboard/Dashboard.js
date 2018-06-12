import React, { Component } from "react";
import AddBeer from "../../components/AddBeer";
import Data from "../../components/Data";
import requireAuth from "../../requireAuth";
import "./Dashboard.css";


class Dashboard extends Component {
    

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6" id="topRated">
                        <h1 className="display-4 topRatedTitle">Top Rated Brews</h1>
                        <div className="topRatedBrews">
                            <Data />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <AddBeer
                        handleFormSubmit={this.handleFormSubmit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default requireAuth(Dashboard);