import React from "react";
import "./AddBeer.css";

const AddBeer = props => (
    <div id="addBeer">
        <h1 className="display-4 addBrewTitle">Add a Brew</h1>
        <div className="row">
            <div className="col">
                <form className="beerForm">
                    <div className="form-group">
                        <label htmlFor="beerName">Name of Beer:</label>
                        <input type="text" className="form-control" value={props.state.beerName} onChange={props.handleInputChange} />
                    </div>
                     <div className="form-group">
                        <label htmlFor="rating">Rating of Beer from 1-5</label>
                        <select className="form-control" id="beerRating" value={props.state.rating} onChange={props.handleInputChange}>
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
                        <input type="text" className="form-control" value={props.state.beerType} onChange={props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breweryName">Name of Brewery:</label>
                        <input type="text" className="form-control" value={props.state.breweryName} onChange={props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="summary">Your summary of the Beer:</label>
                        <textarea className="form-control" id="summary" rows="3" value={props.state.summary} onChange={props.handleInputChange}></textarea>
                    </div>
                    <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={props.handleFormSubmit}>Submit</button>
                </form>
            </div>
        </div>
    </div>
)

export default AddBeer;