import React, { Component } from "react";
import API from "../../utils/API";

class Brewery extends Component {
    state = {
        beers: []
    };

    componentDidMount(){
        this.getSavedBeers();
    }

    getSavedBeers = () => {
        API.getBeer().then(res =>
            this.setState({beers: res.data})
        ).catch(err => console.log(err));
    };



    render(){
        return(
            <div className="container">
                <div className="beers">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <h5 className="card-header">Featured</h5>
                                <div className="card-body">
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                                <ul>
                                    {this.state.beers.map(beer => (
                                        <li>
                                            {beer.beerName}
                                            {beer.rating}
                                            {beer.beerType}
                                            {beer.breweryName}
                                            {beer.summary}
                                        </li>
                                    ))}
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Brewery;