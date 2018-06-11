import React, { Component } from "react";
import API from "../../utils/API";
import Modal from "../Modal/modal";
import "./AddBeer.css";

class AddBeer extends Component {
    constructor() {
        super();
        this.state = {
            beerName: "",
            rating: "",
            beerType: "",
            breweryName: "",
            summary: ""
        };

        this.handlbeerNameChange = this.handlebeerNameChange;
        this.handleratingChange = this.handleratingChange;
        this.handlebeerTypeChange = this.handlebeerTypeChange;
        this.handlebreweryNameChange = this.handlebreweryNameChange;
        this.handlesummaryChange = this.handlesummaryChange;
    }
    

    handlebeerNameChange = event => {
        this.setState({ beerName: event.target.value });
        console.log(event.target.value);
    }

    handleratingChange = event => {
        this.setState({ rating: event.target.value });
        console.log(event.target.value);
    }

    handlebeerTypeChange = event => {
        this.setState({ beerType: event.target.value });
    }

    handlebreweryNameChange = event => {
        this.setState({ breweryName: event.target.value });
    }

    handlesummaryChange = event => {
        this.setState({ summary: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const beer_data = {
            beerName: this.state.beerName,
            rating: this.state.rating,
            beerType: this.state.beerType,
            breweryName: this.state.breweryName,
            summary: this.state.summary
        };
        console.log(beer_data);
        // Send beer data to the Db
        API.createBeer(beer_data).then(res=> {
            console.log(res.data);
        });
    };

    render() {
        return(
            <div id="addBeer">
                <h1 className="display-4 addBrewTitle">Add a Brew</h1>
                <div className="row">
                    <div className="col">
                        <form className="beerForm" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="beerName">Name of Beer:</label>
                                <input 
                                    type="text" 
                                    name="beerName" 
                                    className="form-control" 
                                    onChange={this.handlebeerNameChange}  
                                    value = {this.state.beerName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Rating of Beer from 1-5</label>
                                <select className="form-control" name="rating" id="beerRating" onChange={this.handleratingChange} value={this.state.rating} >
                                    <option defaultValue>Choose...</option>
                                    <option value="1">1 (Not that Good)</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5 (So Good!!)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="beerType">Type of Beer: (ie. IPA, Stout, Ale...)</label>
                                <input 
                                    type="text" 
                                    name="beerType" 
                                    className="form-control" 
                                    onChange={this.handlebeerTypeChange} 
                                    value = {this.state.beerType}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="breweryName">Name of Brewery:</label>
                                <input 
                                    type="text" 
                                    name="breweryName" 
                                    className="form-control" 
                                    onChange={this.handlebreweryNameChange} 
                                    value = {this.state.breweryName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="summary">Your summary of the Beer:</label>
                                <textarea 
                                    className="form-control" 
                                    name="summary" 
                                    id="summary" 
                                    rows="3" 
                                    onChange={this.handlesummaryChange}
                                    value={this.state.summary}>
                                </textarea>
                            </div>
                            <Modal />
                            <button type="submit" className="btn btn-secondary btn-lg btn-block" onClick={this.showModal}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBeer;