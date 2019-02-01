import React, { Component, createContext } from "react";
import {Link} from "react-router-dom";
import fire from "../../config/Fire";
import PageTabs from "../ComponentPageTabs/PageTabs";
import feed_logo from '../../feedimages/feed_logo.png';
import { connectToUser } from '../../context/UserContext';
import UserProfile from "../ComponentUserProfile/UserProfile";
export const p = createContext();
const {Provider, Consumer} = createContext({})
class Feed extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            
        }
    }

    logout = () => {
        fire.auth().signOut()
    };
    
    handleClick = (e) => {
        console.log(e.target.innerHTML)
        let username = e.target.innerHTML
        fire.auth().onAuthStateChanged(user =>
        fire.database().ref(`user/${user.uid}`).update({currontUser : username})
        )
    }

    
    render() {
        return (
            <div className="all_feed" style={{width: "100%"}}>
                <div className="feed_header">
                    <div className="header">
                        <div className="topnav">
                            <div className="topnav_logo">
                                <img src={feed_logo} alt="logoImg"/>
                            </div>
                            <div className="topnav_input">
                                <input type="text" placeholder="Search.."/>
                            </div>
                            <div className="navs">
                                <div className="navs_feed">
                                    <Link to="/myprofile">
                                        <p className="navs_feed_paragraph">My Profile</p>
                                    </Link>
                                </div>
                                <div className="navs_notifications">
                                    <p> Notifications</p>
                                </div>
                                <div className="navs_btn">
                                    <button className="logout"
                                            onClick={this.logout}>
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tabs_users_section" style={{display:"flex"}}>
                    <div className="section_pagetabs"
                         style={{width: "80%"}}>
                        <PageTabs/>
                    </div>
                    <div className="section_users"
                         style={{width: "20%",justifyContent:"space-between",
                             alignItems:"center",padding:10}}>
                        <div>
                           
       {(this.props.username)!== null ? <ul >{(this.props.username).map((user) =>  <Link to = '/userprofile' >
        <li key = {user} onClick = {this.handleClick}>{user}</li></Link>)}</ul> : null}
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connectToUser(Feed)