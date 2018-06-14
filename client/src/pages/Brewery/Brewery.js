import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
// import SavedList from "../../components/SavedList";

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

    getSavedBeers = (id) => {
        API.getBeer().then(res => {
            // console.log(res.data);
            this.setState({beers: res.data})
            console.log(this.state.beers);
        }).catch(err => console.log(err));
    };

    render(props){
        return(
            <div className="container">
                <h1 className="text-center display-3">Beer List</h1>
                <div className="row">
                    {this.state.beers.length? (
                        <Card>
                            {this.state.beers.map(beer => (
                                <div key={beer._id}>
                                    <p id="beer-title" className="mappedText"><strong>Beer Name:</strong> {beer.beerName} <br/>
                                        <strong>Rating:</strong> {beer.rating} <br />
                                        <strong>Beer Type:</strong> {beer.beerType} <br />
                                        <strong>Brewery Name:</strong> {beer.breweryName} <br />
                                        <strong>Description:</strong> {beer.summary}</p> <br />
                                        {/* <button onClick={() => props.savedBeer(beer._id)} value={beer._id}>Save to my List</button> */}
                                    <hr/>
                                </div>
                            ))}
                        </Card>
                    ) : (
                        <h2 className="text-center"> No Saved Beers </h2> 
                    )} 
                </div> 
            </div>
        );
    }
}

export default Brewery;