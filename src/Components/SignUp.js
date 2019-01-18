import React,{Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import './SignUp.css';

class SignUp extends Component{
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            confirm:"",
            name: "",
            username:""
        };

    }
    handleChange=(e)=> {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit=(e)=> {
        e.preventDefault();
    };

    render() {
        return (
            <div className="all_signup">
                <div className="Pictureside firstdiv">
                    <p>Hello</p>
                </div>
                <div className="Form">
                    <form action="#">
                        <div className="FormTitle">
                            <Link to="/signin" className="FormTitle__Link">Sign Up</Link>
                            <div className="alter">
                                Already have an Account?<a href ="#" className="FormTitle__sec">Sign In</a>
                            </div>
                        </div>
                        <div className="FormCenter">
                            <form className="FormFields" onSumbit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="name">Full Name</label>
                                    <input type="text" className="FormField__Input" name= "name" placeholder ="Enter your full name" value = {this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="Username" >Username</label>
                                    <input type="text" name="username" className="FormField__Input" placeholder ="Enter your username" value = {this.state.username} onChange={this.handleChange} />
                                </div>
                            </form>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="E-mail address">E-mail Address</label>
                                <input type="email" name="email" className="FormField__Input" placeholder ="Enter your e-mail address" value = {this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="Password">Password</label>
                                <input type="password"  className="FormField__Input" placeholder ="Enter your password" name ="password" value = {this.state.password} onChange={this.handleChange}/>
                            </div>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor=" Confirm Password"> Confirm Password</label>
                                <input type="password"  className="FormField__Input" placeholder ="Confirm your password"  name= "confirm" value = {this.state.confirm} onChange={this.handleChange}/>
                            </div>
                            <div className="FormField">
                                <label className="CheckboxLabel">
                                    <input className="Checkbox" type="checkbox" name="hasAgreed" /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                                </label>
                            </div>
                            <div className="FormField">
                                <button className="FormField__Button mr-20">Sign Up</button>
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        );
    }
}

export default SignUp;


// import React, { Component } from 'react';
// //import { Link } from 'react-router-dom';
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