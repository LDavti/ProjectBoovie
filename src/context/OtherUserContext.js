import React, { Component, createContext } from "react";
import fire from "../config/Fire";

const { Provider, Consumer } = createContext({});
export class OtherUserProfile extends Component{
    constructor(props)
    {
        super(props)
    }
    render() {
        return <Provider value={this.state}><UserProvider/></Provider>;
    }
}

 function ConnectToOtherUser(Component) {
    return props => (
        <Consumer>{value => <Component {...props} {...value} />}</Consumer>
    );
}

export {ConnectToOtherUser}