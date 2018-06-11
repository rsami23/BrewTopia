import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./Login.css";
import wheatImage from "../../images/wheat.png";

class Signin extends Component {
    onSubmit = (formProps) => {
        this.props.signin(formProps, () => {
            this.props.history.push("https://brewtopiareact.herokuapp.com/dashboard");
        }); 
        console.log(formProps);
    };
    
    render(){
        const { handleSubmit } = this.props;

        return(
            <div>
                <h1 className="form-title display-3">Welcome Back to BrewTopia</h1>
                <div className="container login-form">
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
                        <div> { this.props.errorMessage } </div>
                        <button className="btn btn-secondary btn-lg btn-block">Submit</button>
                    </form>
                </div>
                <div>
                    <img className="wheat-image" src={wheatImage} alt="" />
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
    reduxForm({ form: "signin" })
)(Signin);