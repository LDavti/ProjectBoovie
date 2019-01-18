import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import './SignUp.css';
import signupimg from "../signupimages/signupimg.png";

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            confirm: "",
            name: "",
            username: ""
        };

    }

    handleChange = (e) => {
        let target = e.target;
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
            <div className="all_signup">
                <div className="first_img">
                    <img src={signupimg} alt="signupimg"/>
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
                            <form className="form_fields" onSumbit={this.handleSubmit}>
                                <div className="form_field">
                                    <label className="form_field_label" htmlFor="fullname">Full Name</label>
                                    <input type="text" className="form_field_input" name="name" id="fullname"
                                           placeholder="Enter your full name"
                                           value={this.state.name}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="form_field">
                                    <label className="form_field_label" htmlFor="Username">Username</label>
                                    <input type="text" name="username" className="form_field_input"
                                           placeholder="Enter your username"
                                           value={this.state.username}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="form_field">
                                    <label className="form_field_label" htmlFor="E-mail address">E-mail Address</label>
                                    <input type="email" name="email" className="form_field_input"
                                           placeholder="Enter your e-mail address"
                                           value={this.state.email}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="form_field">
                                    <label className="form_field_label" htmlFor="Password">Password</label>
                                    <input type="password" className="form_field_input"
                                           placeholder="Enter your password" name="password"
                                           value={this.state.password}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="form_field">
                                    <label className="form_field_label" htmlFor=" Confirm Password"> Confirm
                                        Password</label>
                                    <input type="password" className="form_field_input"
                                           placeholder="Confirm your password" name="confirm"
                                           value={this.state.confirm}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="form_field">
                                    <div className="form_for_radio">
                                       <span className="radio_gender">Gender</span>
                                        <div>
                                            <input type="radio" id="male" name="human" value="Ashot" />
                                            <label htmlFor="male">Male</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="female" name="human" value="Anahit"/>
                                            <label htmlFor="female">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_field_checkbox">
                                    <input className="checkbox_field" id="policy_terms" type="checkbox" name="hasAgreed"/>
                                    <label className="checkbox_label" htmlFor="policy_terms">
                                         I agree all statements in
                                        <Link to="" className="form_field_termslink">terms of service</Link>
                                    </label>
                                </div>
                                <div className="form_field_submit">
                                    <button className="formfield_button mr-20">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default SignUp;

// import React, {Component} from 'react';
// //import {Link} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
//
// class SignUp extends Component {
//     constructor() {
//         super();
//         this.state = {
//             email: "",
//             password: "",
//             confirm:"",
//             name: "",
//             username:""
//         };
//
//         // this.handleChange = this.handleChange.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange=(e)=> {
//         let target = e.target;
//         let value = target.type === 'checkbox' ? target.checked : target.value;
//         let name = target.name;
//
//         this.setState({
//             [name]: value
//         });
//     };
//
//     handleSubmit=(e)=> {
//         e.preventDefault();
//     };
//
//     render() {
//         return (
//             <div className="App">
//                 <div className="Pictureside"></div>
//                 <div className="Form">
//                     <div className="FormTitle">
//                         <a href="#" className="FormTitle__Link">Sign Up</a>
//                         <div className="alter">
//                             Already have an Account?<a href ="#" className="FormTitle__sec">Sign In</a>
//                         </div>
//                     </div>
//                     <div className="FormCenter">
//                         <form className="FormFields" onSumbit={this.handleSubmit}>
//                             <div className="FormField">
//                                 <label className="FormField__Label" htmlFor="name">Full Name</label>
//                                 <input type="text" className="FormField__Input" name= "name" placeholder ="Enter your full name" value = {this.state.name} onChange={this.handleChange}/>
//                             </div>
//                             <div className="FormField">
//                                 <label className="FormField__Label" htmlFor="Username" >Username</label>
//                                 <input type="text" name="username" className="FormField__Input" placeholder ="Enter your username" value = {this.state.username} onChange={this.handleChange} />
//                             </div>
//                         </form>
//
//                         <div className="FormField">
//                             <label className="FormField__Label" htmlFor="E-mail address">E-mail Address</label>
//                             <input type="email" name="email" className="FormField__Input" placeholder ="Enter your e-mail address" value = {this.state.email} onChange={this.handleChange} />
//                         </div>
//                         <div className="FormField">
//                             <label className="FormField__Label" htmlFor="Password">Password</label>
//                             <input type="password"  className="FormField__Input" placeholder ="Enter your password" name ="password" value = {this.state.password} onChange={this.handleChange}/>
//                         </div>
//                         <div className="FormField">
//                             <label className="FormField__Label" htmlFor=" Confirm Password"> Confirm Password</label>
//                             <input type="password"  className="FormField__Input" placeholder ="Confirm your password"  name= "confirm" value = {this.state.confirm} onChange={this.handleChange}/>
//                         </div>
//                         <div className="FormField">
//                             <label className="CheckboxLabel">
//                                 <input className="Checkbox" type="checkbox" name="hasAgreed" /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
//                             </label>
//                         </div>
//                         <div className="FormField">
//                             <button className="FormField__Button mr-20">Sign Up</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default SignUp;