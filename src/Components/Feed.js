import React, {Component} from 'react';
import {Link} from "react-router-dom";
import fire from "../config/Fire";
import PageTabs from "./PageTabs";
import feed_logo from '../feedimages/feed_logo.png';


class Feed extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //
    //     };
    //
    // }

    logout = () => {
        fire.auth().signOut()
    };


    render() {
        return (
            <div>
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
                                    <Link to="/myprofile">My Profile</Link>
                                </div>
                                <div className="navs_notifications">
                                    {/*<a href="#"> Notifications</a>*/}
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
                <div className="section_pagetabs">
                    <PageTabs/>
                </div>
            </div>
        );
    }
}

export default Feed;