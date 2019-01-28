import React, {Component} from 'react';
import fire from "./config/Fire";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Welcome from "./Components/Welcome";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import MyProfile from "./Components/MyProfile";
import Feed from "./Components/Feed";
import './App.css';
import { connectToUser } from './context/UserContext';

class App extends Component {
    constructor(props) {
        super(props);
    }
   
    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                switch (this.props.location.pathname) {
                    case "/":
                    case "/signin":
                    case "/signup":
                        this.props.history.push("/myprofile");
                }
            } else {
                this.props.history.push("/");
                //TODO change to switch
            }
        });
    }

    render() {
        if (!this.props.userIsLoaded) {
            return (<div className="loader">Loading...</div>);
        } else {
            return (
                <div>
                    {this.props.user ? (
                        <Switch>
                            <Route path="/feed" component={Feed}/>
                            <Route path="/myprofile"  handle = {(props)=><MyProfile p = "jjj"/>}   component={MyProfile}/>
                            <Redirect to="/myprofile" />
                        </Switch>
                    ) : (
                        <Switch>
                            <Route path="/" exact component={Welcome}/>
                            <Route path="/signin" component={SignIn}/>
                            <Route path="/signup"component={SignUp}/>
                            <Redirect to="/"/>
                        </Switch>
                    )}
                </div>
            );
        }
    }
}

export default withRouter(connectToUser(App));
