import React, {Component} from 'react';
import './MyProfile.css';
import {Link} from "react-router-dom";
import background from "../../myprofileimages/background.png";
import my_profile_boovie_logo from "../../myprofileimages/my_profile_boovie_logo.png";
import exampleimg from "../../myprofileimages/exampleimg.png";
import examplebookimg from "../../myprofileimages/examplebookimg.png";
import book_lover from "../../myprofileimages/book_lover.png";
import fire from "../../config/Fire";
import feed_logo from '../../feedimages/feed_logo.png';
import {connectToUser} from '../../context/UserContext';

const backgroundStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            books: [],
            followingsCount: 0,
            showBooks: false,
            showMovies: false
        }
    }

    componentDidMount() {
        const {user} = this.props;

        this.moviesRef = fire.database().ref(`user/${user.uid}/movies`);
        this.moviesRef.on("value", this.onMoviesLoaded);

        this.booksRef = fire.database().ref(`user/${user.uid}/books`);
        this.booksRef.on("value", this.onBooksLoaded);

        this.ref = fire.database().ref(`user/`);
        this.ref.on("value", this.onUsersLoaded);
    }

    componentWillUnmount() {
        this.moviesRef.off("value", this.onMoviesLoaded);
        this.booksRef.off("value", this.onBooksLoaded);
        this.ref.off("value", this.onUsersLoaded);
    }

    onMoviesLoaded = (snapshot) => {
        const movies = snapshot.val();
        // console.log(movies);
        const moviesArray = [];
        if (movies !== null) {
            Object.keys(movies).forEach(key => {
                moviesArray.push({
                    fireId: key,
                    ...movies[key]
                })
            });
        }

        this.setState({
            movies: moviesArray
        });
    };

    onBooksLoaded = (snapshot) => {
        const books = snapshot.val();
        const booksArray = [];

        if (books !== null) {
            Object.keys(books).forEach(key => {
                booksArray.push({
                    fireId: key,
                    ...books[key]
                })
            });
        }
        this.setState({books: booksArray});
    };

    onUsersLoaded = (snapshot) => {
        const allUsers = snapshot.val();
        let followingsCount = 0;

        const that = this;
        Object.keys(allUsers).forEach(key1 => {
            const user = allUsers[key1];
            if (user.followers) {
                Object.keys(user.followers).forEach(key2 => {
                    const follower = user.followers[key2];
                    if (follower.followerId === that.props.user.uid) {
                        followingsCount++;
                    }
                });
            }
        });

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
        // console.log(this.state.movies);
        return (
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
                                    <button className="inpic">+</button>
                                </div>
                                <div className="names_username">
                                    <p className="full_name_profile">
                                        <span>{this.props.user.fullname}</span>
                                    </p>
                                </div>
                                <div className="username_profile">
                                    <p>{this.props.user.username}</p>
                                </div>
                                <div className="following_follower">
                                    <div className="following">
                                        <p>
                                            Following
                                        </p>
                                        <p>
                                            {this.state.followingsCount}
                                        </p>
                                    </div>
                                    <div className="followers">
                                        <p>
                                            Followers
                                        </p>
                                        <p>
                                            {
                                                this.props.user.followers
                                                    ? Object.keys(this.props.user.followers).length
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
                                    <p>{this.state.books.length}</p>
                                </div>
                                <div onClick={this.toggleMovies} style={{cursor: "pointer"}}>
                                    <p>Movies</p>
                                    <p>{this.state.movies.length}</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie_lover">
                            <div className="movie_lover_paragraph">
                                <p>I am a
                                    {(this.state.movies.length === this.state.books.length) ?
                                        " movie and book" : this.state.movies.length > this.state.books.length ? " movie" : " book"
                                    } lover</p>
                            </div>
                            <div className="movie_lover_img">
                                {(this.state.movies.length > this.state.books.length) ?
                                    <img src={exampleimg} alt="exampleimage"/> : <img src={book_lover} alt="examplebookimage"/>
                                }
                                </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.showBooks && this.state.books.length > 0 ? (
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
                                    this.state.books.map(book => (
                                        <div key={book.fireId} style={{marginBottom: 10}}>
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
                    ) : this.state.showMovies && this.state.movies.length > 0 ? (
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
                                    this.state.movies.map(movie => (
                                        <div key={movie.fireId} style={{marginBottom: 10}}>
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
        )
    }
}

export default connectToUser(MyProfile);

