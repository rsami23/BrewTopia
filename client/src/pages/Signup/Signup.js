import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
    
    
    render(){
        return(
            <div>
            <h1 className="form-title display-3">Join now to start discovering some brews!</h1>
            <div className="container form">
                <form action="/signup" method="POST">
                    <div className="form-group">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName" />
                            </div>
                        </div>
                    </div> 
                    <div className="form-group">
                        <label htmlFor="userId">User ID</label>
                        <input type="text" className="form-control" id="userId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" className="form-control" id="password" />
                    </div>
                    <div className="form-group">
                        <label className="my-1 mr-2" htmlFor="ageValidate">Are you 21 years or older?</label>
                        <select className="custom-select my-1 mr-sm-2" id="ageValidate">
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