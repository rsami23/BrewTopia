import React, { Component } from "react";
import AddBeer from "../../components/AddBeer";
// import Data from "../../components/Data";
// import SavedList from "../../components/SavedList";
import requireAuth from "../../requireAuth";
import API from "../../utils/API";
import "./Dashboard.css";

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beers: []
        };
    };

    componentDidMount(){
        this.getSavedBeers();
    };

    getSavedBeers = (id) => {
        API.getBeer().then(res => {
            // console.log(res.data);
            this.setState({beers: res.data})
            console.log(this.state.beers);
        }).catch(err => console.log(err));
    };

    render() {
        const beers = this.state.beers
            .sort((a, b) => a.rating < b.rating)
            .slice(0,5).map(beers => 
            <div key={beers._id}>
                <p id="beer-title" className="mappedText"><strong>Beer Name:</strong> {beers.beerName} <br/>
                    <strong>Rating:</strong> {beers.rating} <br />
                    <strong>Beer Type:</strong> {beers.beerType} <br />
                    <strong>Brewery Name:</strong> {beers.breweryName} <br />
                    <strong>Description:</strong> {beers.summary}</p> <br />
                    <hr/>
            </div>
        );
 
        return(
            <div className="container">
                {/* <div className="row">
                    <div className="col-sm-12">
                        <SavedList />
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-sm-6" id="topRated">
                        <h1 className="display-4 topRatedTitle">Top Rated Brews</h1>
                        <div className="topRatedBrews">
                            {beers}
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