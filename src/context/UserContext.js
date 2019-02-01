import React, { Component, createContext } from "react";
import fire from "../config/Fire";

const { Provider, Consumer } = createContext({});

class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            userIsLoaded: false,
            username : null,
            refUserUsername : '',
            refUserFullname : '',
            following : 0,
            followers : 0
        };
    }

    componentDidMount() {
        this.authListener();
        this.readingAllUsers();
        this.currontUser();
       // this.usersFollow()
    }
    readingAllUsers = () => {
        let arrOfUsernames = []; 
        fire.database().ref('user/').on('value', snapshot => {
        let cntOfUsers = snapshot.numChildren();
        fire.database().ref('user/').on('child_added', snap => {
            arrOfUsernames.push(snap.val().username) 
            if(cntOfUsers === arrOfUsernames.length)
            {
                this.setState({username: arrOfUsernames})
            } 
        })
    })}
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
    currontUser = () => {
        let link;
        fire.auth().onAuthStateChanged(user => {
            fire.database().ref('user/').on('child_added', snapshot =>{
                link = snapshot.val().currontUser
                //console.log(snapshot.val().currontUser)
                this.setState({
                    refUserUsername : link
                })
                fire.database().ref('user/').orderByChild('username').equalTo(link).once('child_added', snap => {
                    this.setState({
                
                        refUserFullname : snap.val().fullname
                })
                console.log(this.state.refUserFullname)
            })
           
            
            
          
        })})
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