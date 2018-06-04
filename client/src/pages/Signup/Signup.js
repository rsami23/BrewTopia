import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
    
    
    render(){
        return(
            <div>
            <h1 className="form-title display-3">Join now to start discovering some brews!</h1>
            <div className="container form">
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">First Name</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput2">Last Name</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
                            </div>
                        </div>
                    </div> 
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">User ID</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Password</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Are you 21 years or older?</label>
                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option defaultValue>Choose...</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-secondary btn-lg btn-block">Submit</button>
                </form>
            </div>
            </div>
        );
    }
}

export default Signup;