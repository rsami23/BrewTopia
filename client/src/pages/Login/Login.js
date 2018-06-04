import React from "react";
import "./Login.css";
import wheatImage from "../../images/wheat.png";

const Login = () => (
    <div>
        <h1 className="display-3 login-title">Welcome Back to BeerTopia!</h1>
        <div className="container login-form">
            <div className="row">
                <div className="col-sm-12">
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">User ID</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Password</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                    </div>
                    <button type="button" className="btn btn-secondary btn-lg btn-block">Login</button>
                </form>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <img className="wheat-image" src={ wheatImage } alt="" />
            </div>
        </div>
    </div>
)

export default Login;