import React, {Component} from 'react';
import './OtherUserComponent.css';
import {Link} from "react-router-dom";
import otheruserbgimg from "../../otheruserimages/otheruserbgimg.png";
import my_profile_boovie_logo from "../../myprofileimages/my_profile_boovie_logo.png";
import otheruserbookimg from "../../otheruserimages/otheruserbookimg.png";
import fire from "../../config/Fire";
import {connectToUser} from '../../context/UserContext';

const backgroundStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${otheruserbgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

class OtherUserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            followingsCount: 0
        }
    }

    componentDidMount() {
        const ref = fire.database().ref(`user/${this.props.match.params.id}`);
        ref.on("value", snapshot => {
            this.setState({user: snapshot.val()});

            this.ref = fire.database().ref(`user/`);
            this.ref.on("value", this.onUsersLoaded);
        });
    }

    componentWillUnmount() {
        this.ref.off("value", this.onUsersLoaded);
    }

    onUsersLoaded = (snapshot) => {
        const allUsers = snapshot.val();
        let followingsCount = 0;

        const that = this;
        if (allUsers !== null) {
            Object.keys(allUsers).forEach(key1 => {
                const user = allUsers[key1];
                if (user.followers) {
                    Object.keys(user.followers).forEach(key2 => {
                        const follower = user.followers[key2];
                        if (follower.followerId === that.state.user.fireId) {
                            followingsCount++;
                        }
                    });
                }
            });

        }

        this.setState({followingsCount});
    };


    logout = () => {
        fire.auth().signOut()
    };

    render() {
        const {user} = this.state;
        const moviesCount = user && user.movies ? Object.keys(user.movies).length : 0;
        const booksCount = user && user.books ? Object.keys(user.books).length : 0;
        return user ? (
            <div className="all_profile" style={backgroundStyle}>
                <div className="all_profile_sections">
                    <div className="header">
                        <div className="topnav">
                            <div className="topnav_logo">
                                <img src={my_profile_boovie_logo} alt="logoImg"/>
                            </div>
                            <div className="topnav_input"/>
                            <div className="navs">
                                <div className="navs_feed">
                                    <Link to="/Feed">
                                        <p className="navs_feed_paragraph">Feed</p>
                                    </Link>
                                </div>
                                <div className="navs_btn">
                                    <button className="logout" onClick={this.logout}>
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_section">
                        <div className="user-profile">
                            <div className="main_info">
                                <div className="img_btn">
                                    <img className="avatar"
                                         src="https://sun1-4.userapi.com/c7001/v7001120/19261/2I6tX-7H8WU.jpg"
                                         alt="Avatar"/>
                                </div>
                                <div className="main_info_inpic">
                                    <button className="inpic">Follow</button>
                                </div>
                                <div className="other_names_username">
                                    <p className="other_full_name_profile">
                                        <span>{user.fullname}</span>
                                    </p>
                                </div>
                                <div className="other_username_profile">
                                    <p>{user.username}</p>
                                </div>
                                <div className="otheruser_following_follower">
                                    <div className="following">
                                        <p>
                                            Following
                                        </p>
                                        <p>
                                            {this.state.followingsCount?this.state.followingsCount:0}
                                        </p>
                                    </div>
                                    <div className="followers">
                                        <p>
                                            Followers
                                        </p>
                                        <p>
                                            {
                                                user.followers
                                                    ? Object.keys(user.followers).length
                                                    : 0
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="books_movies_lists">
                            <div className="all_list">
                                <div>
                                    <p>Books</p>
                                    <p>{booksCount}</p>
                                </div>
                                <div>
                                    <p>Movies</p>
                                    <p>{moviesCount}</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie_lover">
                            <div className="movie_lover_paragraph">
                                <p>{user.fullname} is a
                                    {(moviesCount === booksCount) ?
                                        " movie and book" : moviesCount > booksCount ? " movie" : " book"
                                    } lover</p>
                            </div>
                            <div className="movie_lover_img">
                                <img src={otheruserbookimg} alt="exampleimage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    }
}

export default connectToUser(OtherUserProfile);