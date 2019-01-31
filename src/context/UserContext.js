import React, { Component, createContext } from "react";
import fire from "../config/Fire";

const { Provider, Consumer } = createContext({});

class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            userIsLoaded: false
        };
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                fire.database().ref("user/" + user.uid).on("value", snapshot => {
                    const userData = snapshot.val();
                    userData.uid = user.uid
                    this.setState({user: userData, userIsLoaded: true});
                })
            } else {
                this.setState({user: null, userIsLoaded: true});
            }
        });
    }

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}

function connectToUser(Component) {
    return props => (
        <Consumer>{value => <Component {...props} {...value} />}</Consumer>
    );
}

export { UserProvider, connectToUser };