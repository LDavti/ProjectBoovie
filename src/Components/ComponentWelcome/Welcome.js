import React, {Component} from 'react';
import './Welcome.css';
import {Link} from "react-router-dom";
import {IoMdHeart} from "react-icons/io";
import welfirst from "../../welcomeimages/welfirst.png";
import welsecond from "../../welcomeimages/welsecond.png";
import welthird from "../../welcomeimages/welthird.png";
import welfour from "../../welcomeimages/welfour.png";
import boovie_logo_new from "../../welcomeimages/boovie_logo_new.png";
import books from "../../welcomeimages/books.png"

class Welcome extends Component {
    render() {
        return (
            <div className="all_welcome">
                <div id="welcome_section" className="welcome_section">
                    <div className="welcome_image">
                        <img className="image1" src={welfirst}
                             alt="slidefirstimg"/>
                        <img className="image2" src={welsecond}
                             alt="slidesecondimg"/>
                    </div>
                    <div className="welcome_text">
                        <div className="about_boovie">
                            <div className="line_first">
                                <img className="logo" src={boovie_logo_new}
                                     alt="boovie_img"/>
                            </div>
                            <div className="boovie_text_width">
                                <p>
                                    Boovie is a simple and fun way to discover great
                                    movies and books based on reviews from people you trust.
                                    You can save books and movies to your list,
                                    share your favorite ones with friends,and keep track of
                                    what others are watching and reading.
                                </p>
                            </div>
                            <div>
                                <p className="text">
                                    First time on Boovie or already have an account?
                                    Hurry up to join us
                                </p>
                            </div>
                            <div className="btn ">
                                <Link to="/signin">
                                    <button className="btn_login buttons">
                                        Sign In
                                    </button>
                                </Link>
                                <Link to="/signup">
                                    <button className="btn_signup buttons">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blueline"/>
                <div className="why_boovie">
                    <div className="why_header">
                        <h1>Why Boovie?</h1>
                    </div>
                    <div className="want_to">
                        <div className="want_to_desc">
                            <h2>
                                Want to find a movie to watch or book to read ?
                                Boovie is here to help you!
                            </h2>
                            <p className="plain">
                                Your timeline shows what movies or books your
                                friends prefer.You can discuss any of them and
                                let them know about your thoughts. Also it will
                                be good to start read or watch something
                                new together.
                            </p>
                        </div>
                        <div className="want_to_img">
                            <img
                                className="image3"
                                src={welthird}
                                alt="thirdimg"/>
                        </div>
                    </div>
                    <div className="want_to">
                        <div className="want_to_img">
                            <img
                                className="image3"
                                src={welfour}
                                alt="fourthimg"/>
                        </div>
                        <div className="want_to_desc">
                            <h2>
                                Not sure if a movie or a book is good ?
                            </h2>
                            <p className="plain">
                                For every movie and book,you can see reviews from people,
                                also you can compare them to rotten tomatoes or stars
                                to see what the rest of the world thinks.
                            </p>
                        </div>
                    </div>
                    <div className="want_to">
                        <div className="want_to_desc">
                            <h2>
                                Want to connect with movie-lovers or
                                bookoholics ? Boovie is that place!
                            </h2>
                            <p className="plain">
                                Find your friends on Boovie or follow the users
                                you like.You can see each user's lists
                                and send them direct messages. Go on!
                            </p>
                        </div>
                        <div className="want_to_img">
                            <img
                                className="image3"
                                src={books}
                                alt="thirdimg"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p className="footer-center">
                        {"\u00A9"} 2019 Made with
                        <span className="heart-icon"><IoMdHeart/></span>
                        by Boovie team
                    </p>
                    <a href="https://tikonazaryan91.github.io/ourpage/"
                       target="_blank" className="link_to_booviepage">
                    <p className="footer-center">
                        <span className="heart-icon team_page">
                            Boovie team page
                        </span>
                    </p>
                    </a>
                </div>
            </div>
        );
    }
}

export default Welcome;