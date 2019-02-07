import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './SignIn.css';
import sigin from "../../signinimages/sigin.png";
import fire from "../../config/Fire";
//import '../ComponentSignUp/SignUp.css'


class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            incorEmail: "",
            incorPass: ""
        };
    }

    login = e => {
        e.preventDefault();
        fire
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(u => {
                this.props.history.push("/feed");
            })
            .catch(error => {
               this.setState({incorEmail : error.message, incorPass : error.message
            })
            });
    };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="all_signin">
                <div className="first_img">
                    <img src={sigin} alt="signinimgpng"/>
                </div>
                <div className="signin_form">
                    <div className="signin_all">
                        <div className="signin_title">
                            <h2 className="signin_heading">
                                Sign In
                            </h2>
                            <div className="alter">
                                First time in Boovie and don't have an account?
                                <Link to="/signup" className="go_to_signup">
                                    <span>Sign Up</span>
                                </Link>
                            </div>
                            <div className="Error_fields" style = {{paddingTop : "10px"}} >{this.state.incorEmail}</div>
                        </div>
                        <div className="form_all_signin" onClick={e => e.stopPropagation()}>
                            <form className="signin_form_fields">
                                <div className="signin_form_field">
                                    <label className="signin_form_field_label"
                                           htmlFor="email">
                                        E-mail
                                        
                                    </label>
                                    <input type="email"
                                           name="email"
                                           id="email"
                                           className="signin_form_field_input"
                                           placeholder="Enter your e-mail"
                                           value={this.state.email}
                                           onChange={this.handleChange}
                                           autoComplete = "off"
                                    />
                                </div>
                                <div className="signin_form_field">
                                    <label className="signin_form_field_label"
                                           htmlFor="password">
                                        Password
                                        
                                    </label>
                                    <input type="password"
                                           className="signin_form_field_input"
                                           placeholder="Enter your password"
                                           name="password"
                                           id="password"
                                           value={this.state.password}
                                           onChange={this.handleChange}
                                    />
                                </div>
                                <div className="signin_form_field_submit">
                                    <button
                                        type="submit"
                                        className="signin_formfield_button"
                                        onClick={this.login}>
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;