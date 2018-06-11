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

    beerList = (props) => {
        const beerItems = props.beers.map((beer => {
            return <BeerListItem beer={beer} />
        }));
    }

    render(){
        return(
            <div className="container">
                <div className="beers">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul>
                                {beerItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Brewery;