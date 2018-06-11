import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./Signup.css";

class Signup extends Component {
    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push("https://brewtopiareact.herokuapp.com/dashboard");
        }); 
        console.log(formProps);
    };
    
    render(){
        const { handleSubmit } = this.props;

        return(
            <div>
            <h1 className="form-title display-3">Join now to start discovering some brews!</h1>
            <div className="container form">
                <form onSubmit={ handleSubmit(this.onSubmit) }> 
                    <div className="form-group">
                        <fieldset>
                        <label htmlFor="userId">User ID</label>
                        <Field
                            name="userId"
                            type="text"
                            component="input"
                            className="form-control"
                            userid="userId"
                            autoComplete="none"
                        />
                        </fieldset>
                    </div>
                    <div className="form-group">
                        <fieldset>
                        <label htmlFor="password">Password</label>
                        <Field
                            name="password"
                            type="password"
                            component="input"
                            className="form-control"
                            password="password"
                        />
                        </fieldset>
                    </div>
                    <div className="form-group">
                        <label className="my-1 mr-2" htmlFor="ageValidate">Are you 21 years or older?</label>
                        <select className="custom-select my-1 mr-sm-2" id="ageValidate">
                            <option defaultValue>Choose...</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                    <div> { this.props.errorMessage } </div>
                    <button className="btn btn-secondary btn-lg btn-block">Submit</button>
                </form>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose( 
    connect(mapStateToProps, actions), 
    reduxForm({ form: "signup" })
)(Signup);