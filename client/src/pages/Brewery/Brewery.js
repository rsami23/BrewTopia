import React, { Component } from "react";
import API from "../../utils/API";
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
    };

    render(){
        // var beerList = this.state.beers.map((beer) => (
        //     <li
        //         key={beer._id}
        //         _id={beer._id}
        //         beerName={beer.beerName}
        //         rating={beer.rating}
        //         beerType={beer.beerType}
        //         summary={beer.summary}
        //     />
        // ));

        var beerList = () => {
            for(i = 0; i < beers.length; i++){
                console.log(beers[i]);
            };
        };

        return(
            <div className="container">
                <div className="beers">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul>
                                {beerList} 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Brewery;