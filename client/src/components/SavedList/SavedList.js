import React, { Component } from "react";
import API from "../../utils/API";

class SavedList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beers: []
        };
    };

    // componentDidMount(){
    //     this.getSavedBeers();
    // };

    // getSavedBeers = (id) => {
    //     API.getBeer().then(res => {
    //         // console.log(res.data);
    //         this.setState({beers: res.data})
    //         console.log(this.state.beers);
    //     }).catch(err => console.log(err));
    // };

    savedBeers = (id) => {   
        API.saveBeer(id);
        this.getSavedBeers();
        
    }

    render(){
        return(
            <div className="row">
                {this.state.beers.length? (
                    <div className="col-sm-12">
                        {this.state.beers.map(beer => (
                            <div key={beer._id}>
                                <p id="beer-title" className="mappedText">
                                    <strong>Beer Name:</strong> {beer.beerName} <br/>
                                    <strong>Brewery Name:</strong> {beer.breweryName}</p> <br />
                                    <hr/>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h2 className="text-center"> No Saved Beers </h2> 
                )} 
            </div> 
        )
    }
}

export default SavedList;