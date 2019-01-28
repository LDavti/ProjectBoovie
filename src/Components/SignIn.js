import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './SignIn.css';
import sign_in from "../signinimages/sign_in.png"
//import sigup from "../signinimages/sigup.png";
import fire from "../config/Fire";


class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            // username: "",
            email: "",
            password: "",
            // formErrors: {email: '', password: ''},
            // emailValid: false,
            // passwordValid: false,
            // formValid: false
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
                console.log(error);
            });
    };

    // signup = e => {
    //     e.preventDefault();
    //     fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    //         .then((u) => {
    //             console.log(u)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    // handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     this.setState({[name]: value});
    // };

    // handleUserInput = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     this.setState({[name]: value});
    // };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    render() {
        return (
            <div className="all_signin">
                <div className="first_img">
                    <img src={sign_in} alt="signupimgpng"/>
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
                        <div className="form_all_signin" onClick={e => e.stopPropagation()}>
                            {/*<form className="signin_form_fields" onSumbit={this.handleSubmit}>*/}
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
                                        // onChange={(e)=>this.handleChange(e)}/>
                                        //    onChange={(event) => this.handleUserInput(event)}
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
                                        // onChange={(e)=>this.handleChange(e)}/>
                                        //    onChange={(event) => this.handleUserInput(event)}
                                    />
                                </div>
                                <div className="signin_form_field_submit">
                                    {/*<Link to="/myprofile" className="go_to_myprofile"></Link>*/}
                                    <button
                                        type="submit"
                                        className="signin_formfield_button"
                                        // value="SignIn"
                                        onClick={this.login}>
                                        Sign In
                                    </button>
                                    {/*<button*/}
                                        {/*className="signin_formfield_button"*/}
                                        {/*style={{marginLeft:20,backgroundColor:"green"}}*/}
                                        {/*onClick={this.signup}>*/}
                                        {/*Sign Up*/}
                                    {/*</button>*/}
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