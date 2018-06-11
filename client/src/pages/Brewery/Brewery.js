import React, { Component } from "react";
import API from "../../utils/API";
import BeerListItem from "../../components/BeerListItem";

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
                            <ul>
                                {this.state.beers.pipe(map(beer => (
                                    <BeerListItem 
                                        key={beer._id}
                                        _id={beer._id}
                                        beerName={beer.beerName}
                                        rating={beer.rating}
                                        beerType={beer.beerType}
                                        summary={beer.summary}
                                    />
                                )))}   
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Brewery;