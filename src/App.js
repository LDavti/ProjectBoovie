import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Welcome from "./Components/Welcome";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    {/*<Route path="/feed" component={SignUp}/>*/}

                </Switch>
            </div>
        );
    }
}

export default App;
