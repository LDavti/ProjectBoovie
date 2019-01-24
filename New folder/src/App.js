import React, {Component} from 'react';
import fire from "./config/Fire";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Welcome from "./Components/Welcome";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import MyProfile from "./Components/MyProfile";
import Feed from "./Components/Feed";
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoaded: false
        };
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({user});
                switch (this.props.location.pathname) {
                    case "/":
                    case "/signin":
                    case "/signup":
                        this.props.history.push("/feed");
                }
                this.setState({isLoaded: true});
            } else {
                this.setState({user: null, isLoaded: true});
                this.props.history.push("/");
                //TODO change to switch
            }
        });
    }

    render() {
        if (!this.state.isLoaded) {
            return (<div className="loader">Loading...</div>);
        } else {
            return (
                <div>
                    {this.state.user ? (
                        <Switch>
                            <Route path="/feed" component={Feed}/>
                            <Route path="/myprofile" component={MyProfile}/>
                            <Redirect to="/feed"/>
                        </Switch>
                    ) : (
                        <Switch>
                            <Route path="/" exact component={Welcome}/>
                            <Route path="/signin" component={SignIn}/>
                            <Route path="/signup" component={SignUp}/>
                            <Redirect to="/"/>
                        </Switch>
                    )}


                    {/*<Switch>*/}
                    {/*<Route path="/" exact component={Welcome}/>*/}
                    {/*<Route path="/signin" component={SignIn}/>*/}
                    {/*<Route path="/signup" component={SignUp}/>*/}
                    {/*<Route path="/myprofile" component={MyProfile}/>*/}
                    {/*<Route path="/feed" component={Feed}/>*/}
                    {/*/!*<Route path="/https://termsfeed.com/blog/privacy-policy-mandatory-law/" />*!/*/}
                    {/*/!*<Route path="/feed" component={SignUp}/>*!/*/}
                    {/*</Switch>*/}

                </div>
            );
        }
    }
}

export default withRouter(App);