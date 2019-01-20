import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import './SignIn.css';
import signin from "../signinimages/signin.png"


class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
        };
    }

    handleChange = (e) => {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="all_signin">
                <div className="first_img">
                    <img src={signin} alt="signinimgpng"/>
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
                        </div>
                        <div className="form_all_signin">
                            <form className="signin_form_fields" onSumbit={this.handleSubmit}>
                                <div className="signin_form_field">
                                    <label className="signin_form_field_label" htmlFor="Username">
                                        Username or e-mail
                                    </label>
                                    <input type="text" name="username"
                                           className="signin_form_field_input"
                                           placeholder="Enter your username or e-mail"
                                           value={this.state.username}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="signin_form_field">
                                    <label className="signin_form_field_label" htmlFor="Password">
                                        Password
                                    </label>
                                    <input type="password" className="signin_form_field_input"
                                           placeholder="Enter your password" name="password"
                                           value={this.state.password}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="signin_form_field_submit">
                                    <Link to="/myprofile" className="go_to_myprofile">
                                        <button className="signin_formfield_button">Sign In</button>
                                    </Link>
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