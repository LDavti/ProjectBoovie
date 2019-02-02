import React, {Component} from "react";
import fire from "firebase";
import {Link} from "react-router-dom";
import "./Users.css";
import {connectToUser} from "../../context/UserContext";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.ref = fire.database().ref(`user/`);
        this.ref.on("value", this.onUsersLoaded);
    }

    componentWillUnmount() {
        this.ref.off("value", this.onUsersLoaded);
    }


    onUsersLoaded = (snapshot) => {
        const allUsers = snapshot.val();
        let allUsersArray = [];

        const that = this;
        if (allUsers !== null) {
            Object.keys(allUsers).forEach(key => {
                if(key !== that.props.user.uid) {
                    allUsersArray.push({
                        fireId: key,
                        fullname: allUsers[key].fullname,
                        username: allUsers[key].username
                    });
                }
            });
        }
        this.setState({users: allUsersArray});
    };

    handeleUserClick=(userFireId)=>{
        const isConfirmed = window.confirm("Want to follow?");
        if (isConfirmed) {
            fire.database().ref(`user/${userFireId}/followers`).push().set({
                followerId: this.props.user.uid,
                username:this.props.user.username,
                fullname:this.props.user.fullname
            });
        }
    };

    render() {
        const {users} = this.state;

        return (
            <div className="all_users_list">
                <div className="who_follow">
                    <p>Who to follow</p>
                </div>
                <div className="users_line"/>
                <div className="about_users">
                    {
                        users.map(user =>
                            <Link to={`/user/${user.fireId}`} key={user.fireId}>
                                <div className="user_info_of_users">
                                    <div className="for_user_img"/>
                                    <div className="fullname_username_all">
                                        <div className="inner_fullname">{user.fullname}</div>
                                        <div className="btn_follow">
                                            <div className="inner_username">{user.username}</div>
                                            <button
                                                className="btn_user_follow"
                                                onClick={(e)=> {
                                                e.preventDefault();
                                                this.handeleUserClick(user.fireId)
                                            }
                                            }>follow</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default connectToUser(Users);