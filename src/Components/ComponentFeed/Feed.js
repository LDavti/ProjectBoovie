import React, {Component} from 'react';
import {Link} from "react-router-dom";
import fire from "../../config/Fire";
import PageTabs from "../ComponentPageTabs/PageTabs";
import feed_logo from '../../feedimages/feed_logo.png';
import "./Feed.css";
import Users from "../UsersComponent/Users";
import book1 from "../../gifs/book1.gif";


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsLoaded: false,
        };

    }

    componentDidMount() {
        this.setState({
            IsLoaded: true
        });
    }

    logout = () => {
        fire.auth().signOut()
    };

    render() {
        if (!this.state.IsLoaded) {
            return (<img src={book1} alt="thereisagif" className="loader1"/>);
        } else {
            return (
                <div className="all_feed">
                    <div className="feed_header">
                        <div className="header">
                            <div className="topnav">
                                <div className="topnav_logo">
                                    <img src={feed_logo} alt="logoImg"/>
                                </div>
                                <div className="topnav_input"/>
                                <div className="navs">
                                    <div className="navs_feed">
                                        <Link to="/myprofile">
                                            <p className="navs_feed_paragraph">My Profile</p>
                                        </Link>
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
                    <div className="tabs_users_section">
                        <div className="section_pagetabs">
                            <PageTabs/>
                        </div>
                        <div className="section_users">
                            <Users/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Feed;