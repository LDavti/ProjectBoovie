import React, {Component} from "react";
import fire from "firebase";
import {Link} from "react-router-dom";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        console.log("asds");
        const ref = fire.database().ref(`user/`);
        ref.on("value", (snapshot) => {
            const allUsers = snapshot.val();
            const allUsersArray = [];

            Object.keys(allUsers).forEach(key => {
                allUsersArray.push({
                    fireId: key,
                    fullname: allUsers[key].fullname,
                    username: allUsers[key].username
                })
            });
            // debugger;
            this.setState({users: allUsersArray});
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code);
        });
    }


    render() {
        const {users} = this.state;

        return (
            <div>
                <p>USERS</p>
                <div>
                    {
                        users.map(user =>
                            <Link to={`/user/${user.fireId}`} key={user.fireId}>
                                <div >
                                    <div>{user.fullname}</div>
                                    <div>{user.username}</div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Users;