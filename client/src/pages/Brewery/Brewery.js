import React, { Component } from "react";
import API from "../../utils/API";
import Data from "../../components/Data";
// import BeerListItem from "../../components/BeerListItem";

class Brewery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beers: []
        };
    };
    

    componentDidMount(){
        this.getSavedBeers();
    };

    getSavedBeers = () => {
        API.getBeer().then(res =>
            this.setState({beers: res.data})
        ).catch(err => console.log(err));
        console.log("beer should show up");
    };

    render(){
        if (this.props.beer){
            var beerList = this.props.beers.map((beer) => (
                <li key={beer._id}>
                    {beer.beerName}
                    {beer.rating}
                    {beer.beerType}
                    {beer.breweryName}
                    {beer.summary}
                </li>
            ));
        }

        return(
            <div className="container">
                <div className="beers">
                    <div className="breweryData">
                        <Data />
                    </div>
                </div>
            </div>
        );
    }
}

export default Brewery;