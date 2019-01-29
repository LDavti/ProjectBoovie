import React, {Component} from 'react';
import {Link} from "react-router-dom";
import fire from "../../config/Fire";
import PageTabs from "../ComponentPageTabs/PageTabs";
import feed_logo from '../../feedimages/feed_logo.png';


class Feed extends Component {

    logout = () => {
        fire.auth().signOut()
    };

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
                            <p>USERS</p>
                            <ul>
                                <li>User</li>
                                <li>User</li>
                                <li>User</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feed;