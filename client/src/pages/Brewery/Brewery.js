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

    beerList = () => {
        for(var i = 0; i < beers.length; i++){
            console.log(beers[i]);
        }
    }

    render(){
        return(
            <div className="container">
                <div className="beers">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul>
                                   
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Brewery;