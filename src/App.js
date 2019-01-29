import React, {Component} from 'react';
import fire from "./config/Fire";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Welcome from "./Components/ComponentWelcome/Welcome";
import SignIn from "./Components/ComponentSignIn/SignIn";
import SignUp from "./Components/ComponentSignUp/SignUp";
import MyProfile from "./Components/ComponentMyProfile/MyProfile";
import Feed from "./Components/ComponentFeed/Feed";
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
                        this.props.history.push("/feed");
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
                            <Route path="/myprofile" component={MyProfile}/>
                            <Redirect to="/feed" />
                        </Switch>
                    ) : (
                        <Switch>
                            <Route path="/" exact component={Welcome}/>
                            <Route path="/signin" component={SignIn}/>
                            <Route path="/signup" component={SignUp}/>
                            <Redirect to="/"/>
                        </Switch>
                    )}
                </div>
            );
        }
    }
}

export default withRouter(connectToUser(App));

