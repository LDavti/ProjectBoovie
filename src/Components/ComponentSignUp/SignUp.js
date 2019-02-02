import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './SignUp.css';
import registration from "../../signupimages/registration.png";
import fire from "../../config/Fire";
// import firebase from "firebase";


class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            confirm: "",
            name: "",
            username: "",
            hasAgreed: false,
            human: true,
        };
    }

    signup = e => {
        e.preventDefault();
        fire.database().ref("/user/").orderByChild("username").equalTo(this.state.username).once("value", snapshot => {
            const user = snapshot.val();
            if (user) {
                alert(`User with ${this.state.username} username already exists`);
            } else {
                fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(user => {
                    fire.database().ref('user/' + user.user.uid).set({
                        fullname: this.state.name,
                        username: this.state.username
                    })
                }).catch(error => {
                    alert(error);
                });
            }
        })

    };


    handleChange = (e) => {

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });

    };
    errorOfFullname = () => {

        let {name} = this.state;
        //let {validName} = this.validField
        (name.length > 0 && name.length < 40) ? this.validField.validName = true : this.validField.validName = false;
        if (name.length > 40) {
            return <div className="Error_fields">Invalid name</div>
        }
    };

    validField = {
        validName: false,
        validUsername: false,
        validEmail: false,
        validPassword: false,
        validConfirm: false
    };

    errorOfUsername = () => {

        let {username} = this.state;
        let pattern = /^@[a-zA-Z0-9._]*$/
        if (username.slice(0, 1) !== "@") {
            if (username === "") {
                return <div/>
            }
            return <div className="Error_fields">Username must starts with @</div>
        }
        username.match(pattern) ? this.validField.validUsername = true : this.validField.validUsername = false;
        return <div
            className="Error_fields">{(username.match(pattern)) ? " " : "Username may contains letters, numbers, dot , underscore "}</div>
    };
    errorOfEmail = () => {
        // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        let {email} = this.state;
        email.match(pattern) ? this.validField.validEmail = true : this.validField.validEmail = false;
        return <div
            className="Error_fields">{(email.match(pattern) || email === "") ? " " : "Invalid e-mail address"}</div>
    };
    errorOfPassword = () => {
        let pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*)(?=.*[a-z]).*$/
        let {password} = this.state;
        password.match(pattern) ? this.validField.validPassword = true : this.validField.validPassword = false
        return <div
            className="Error_fields">{(password.match(pattern) || password === "") ? " " : "Password must be at least 8 characters minimum, letters and numbers / specialChar"}</div>
    };
    errorOfConfirm = () => {
        let {confirm, password} = this.state;
        password === confirm ? this.validField.validConfirm = true : this.validField.validConfirm = false;
        return <div
            className="Error_fields">{(password === confirm || confirm === "") ? " " : "Must be equal to password"}</div>
    };

    disabledCheckbox = () => {
        let {validName, validUsername, validEmail, validPassword, validConfirm} = this.validField;
        let {confirm} = this.state;
        return (validName === true && validUsername === true && validEmail === true
            && validPassword === true && validConfirm === true) ? false : true;
    };


    render() {

        return (

            <div className="all_signup">
                <div className="first_img">
                    <img src={registration} alt="signupimg"/>
                </div>
                <div className="signup_form">
                    <div className="signup_all">
                        <div className="signup_title">
                            <h2 className="signup_heading">
                                Sign Up
                            </h2>
                            <div className="alter">
                                Already have an Account?
                                <Link to="/signin" className="go_to_signin">
                                    <span>Sign In</span>
                                </Link>
                            </div>
                        </div>
                        <div className="form_all">
                            <form className="form_fields">
                                <div className="form_field">
                                    <label className="form_field_label" htmlFor="fullname">Full Name</label>
                                    <input type="text" className="form_field_input" name="name" id="fullname"
                                           placeholder="Enter your full name"
                                           value={this.state.name}

                                           onChange={this.handleChange}/>
                                    {this.errorOfFullname()}
                                </div>
                                <div className="form_field">
                                    <label className="form_field_label" htmlFor="Username">Username</label>
                                    <input type="text" name="username" className="form_field_input" id="Username"
                                           placeholder="Enter your username"
                                           value={this.state.username}
                                           onChange={this.handleChange}/>
                                    {this.errorOfUsername()}
                                </div>
                                <div className="form_field">
                                    <label className="form_field_label" htmlFor="E-mail address">E-mail Address</label>
                                    <input type="email" name="email" className="form_field_input" id="E-mail address"
                                           placeholder="Enter your e-mail address"
                                           value={this.state.email}
                                           onChange={this.handleChange}/>
                                    {this.errorOfEmail()}
                                </div>
                                <div className="form_field">
                                    <label className="form_field_label" htmlFor="Password">Password</label>
                                    <input type="password" className="form_field_input" id="Password"
                                           placeholder="Enter your password" name="password"
                                           value={this.state.password}
                                           onChange={this.handleChange}/>
                                    {this.errorOfPassword()}
                                </div>
                                <div className="form_field">
                                    <label className="form_field_label" htmlFor=" Confirm Password"> Confirm
                                        Password</label>
                                    <input type="password" className="form_field_input" id=" Confirm Password"
                                           placeholder="Confirm your password" name="confirm"
                                           value={this.state.confirm}
                                           onChange={this.handleChange}/>
                                    {this.errorOfConfirm()}
                                </div>
                                <div className="form_field">
                                    <div className="form_for_radio">
                                        <span className="radio_gender">Gender</span>
                                        <div>
                                            <input type="radio" id="male" name="human"
                                                   style={{width: "15px", height: "15px"}}
                                                   defaultChecked={this.state.human}
                                            />
                                            <label htmlFor="male" className="malefemaleText">Male</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="female" name="human"
                                                   style={{width: "15px", height: "15px"}}/>
                                            <label htmlFor="female" className="malefemaleText">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_field_checkbox">
                                    <input className="checkbox_field" id="policy_terms" type='checkbox' name="hasAgreed"
                                           checked={this.state.hasAgreed}
                                           disabled={this.disabledCheckbox()} onChange={this.handleChange}/>
                                    <label className="checkbox_label" htmlFor="policy_terms">
                                        I agree all statements in
                                        <Link to="" className="form_field_termslink">terms of service</Link>
                                    </label>
                                </div>
                                <div className="form_field_submit">
                                    <button className="formfield_button mr-20"
                                            name="button"
                                            type="submit"
                                            disabled={!this.state.hasAgreed}
                                            onClick={this.signup}
                                    > Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SignUp;

