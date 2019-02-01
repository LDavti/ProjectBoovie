import React, {Component} from "react";
import fire from "firebase";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        // const {user} = this.props;

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
                    {users.map(user=>
                    <div>
                        <div>{user.fullname}</div>
                        <div>{user.username}</div>
                    </div>
                )}
                </div>
            </div>
        );
    }
}

export default Users;