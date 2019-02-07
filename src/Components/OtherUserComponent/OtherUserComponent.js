import React, {Component} from 'react';
import './OtherUserComponent.css';
import {Link} from "react-router-dom";
import otheruserbackground from "../../otheruserimages/otheruserbackground.png";
import my_profile_boovie_logo from "../../myprofileimages/my_profile_boovie_logo.png";
// import otheruserbookimg from "../../otheruserimages/otheruserbookimg.png";
// import movie_lover from "../../otheruserimages/movie-lover.png";
import book_lover from "../../otheruserimages/book_lover.png"
import movie_lover from "../../otheruserimages/movie_lover.png";
import fire from "../../config/Fire";
import feed_logo from '../../feedimages/feed_logo.png';
import {connectToUser} from '../../context/UserContext';

const backgroundStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${otheruserbackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

class OtherUserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            followingsCount: 0,
            showBooks: false,
            showMovies: false
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
                let user = allUsers[key1];
                if (user.followers) {
                    Object.keys(user.followers).forEach(key2 => {
                        let follower = user.followers[key2];
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

    toggleBooks = (e) => {
        this.setState(state => ({showBooks: !state.showBooks}));
    };

    toggleMovies = (e) => {
        this.setState(state => ({showMovies: !state.showMovies}));
    };

    render() {
        const {user} = this.state;
        const moviesCount = user && user.movies ? Object.keys(user.movies).length : 0;
        const booksCount = user && user.books ? Object.keys(user.books).length : 0;
        const moviesObj = user && user.movies ? Object.values(user.movies) : 0;
        const booksObj = user && user.books ? Object.values(user.books): 0;
        console.log(user);

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
                                        <span>{user ? user.fullname : null}</span>
                                    </p>
                                </div>
                                <div className="other_username_profile">
                                    <p>{user ? user.username : null}</p>
                                </div>
                                <div className="otheruser_following_follower">
                                    <div className="following">
                                        <p>
                                            Following
                                        </p>
                                        <p>
                                            {this.state.followingsCount ? this.state.followingsCount : 0}
                                        </p>
                                    </div>
                                    <div className="followers">
                                        <p>
                                            Followers
                                        </p>
                                        <p>
                                            {
                                                user && user.followers
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
                                <div onClick={this.toggleBooks} style={{cursor: "pointer"}}>
                                    <p>Books</p>
                                    <p>{booksCount}</p>
                                </div>
                                <div onClick={this.toggleMovies} style={{cursor: "pointer"}}>
                                    <p>Movies</p>
                                    <p>{moviesCount}</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie_lover">
                            <div className="movie_lover_paragraph">
                                <p>{user ? user.fullname : null} is a
                                    {(moviesCount === booksCount) ?
                                        " movie and book" : moviesCount > booksCount ? " movie" : " book"
                                    } lover.</p>
                            </div>
                            <div className="movie_lover_img">
                                {(moviesCount > booksCount) ?
                                    <img src={movie_lover} alt="exampleimage"/>   :  <img src={book_lover} alt="exampleimage"/>
                                }
                                {/*<img src={otheruserbookimg} alt="exampleimage"/>*/}
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.showBooks && Object.keys(user.books).length > 0 ? (

                        <div className="backdrop" onClick={this.toggleBooks}>
                            <div className="modal">
                                <div className="modal_header">
                                    <div className="modal_topnav">
                                        <div className="modal_topnav_logo">
                                            <img src={feed_logo} alt="logoImg"/>
                                        </div>
                                        <div className="modal_navs">
                                            <div className="modal_navs_feed">
                                                <Link to="/feed">
                                                    <p className="modal_navs_feed_paragraph">Feed</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    booksObj.map((book,key) => (
                                        <div key={key} style={{marginBottom: 10}}>
                                            <h2>{book.title}</h2>
                                            <div style={{display: "flex"}}>
                                                <img
                                                    style={{maxHeight: "fit-content"}}
                                                    alt={book.title}
                                                    src={book.images.volumeInfo.imageLinks.thumbnail}
                                                />
                                                <p style={{padding: "0 10px"}}>
                                                    {book.images.volumeInfo.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ) : this.state.showMovies && Object.keys(user.movies).length > 0 ? (
                        <div className="backdrop" onClick={this.toggleMovies}>
                            <div className="modal">
                                <div className="modal_header">
                                    <div className="modal_topnav">
                                        <div className="modal_topnav_logo">
                                            <img src={feed_logo} alt="logoImg"/>
                                        </div>
                                        <div className="modal_navs">
                                            <div className="modal_navs_feed">
                                                <Link to="/feed">
                                                    <p className="modal_navs_feed_paragraph">Feed</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    moviesObj.map((movie,key) => (
                                        <div key={key} style={{marginBottom: 10}}>
                                            <h2>{movie.title}</h2>
                                            <div style={{display: "flex"}}>
                                                <img
                                                    style={{maxHeight: "fit-content", width: 150, height: 150}}
                                                    src={`http://image.tmdb.org/t/p/w500/${movie.images}`}
                                                />
                                                <p style={{padding: "0 10px"}}>
                                                    {movie.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ) : null
                }
            </div>
        ) : null
    }
}

export default connectToUser(OtherUserProfile);


