import React, {Component} from 'react';
import './Welcome.css';
import {Link, NavLink} from "react-router-dom";
// import { FaBeer,} from 'react-icons/fa';
import { IoMdHeart  } from "react-icons/io";
import second from "../welcomeimages/second.svg";
// import secondslide from "../welcomeimages/secondslide.svg";
import third from "../welcomeimages/third.svg";
// import four from "../welcomeimages/four.svg";
import firstslide from "../welcomeimages/firstslide.svg";
import p from "../welcomeimages/p.png";

class Welcome extends Component {
    render() {
        return (
            <div className="all_welcome">
                <div id="welcome_section" className="welcome_section">
                    <div className="welcome_image">
                        <img className="image1" src={p}
                             alt="firstimg"/>
                    </div>
                    <div className="welcome_text">
                        <div className="about_boovie">
                            <p className="line_first"/>
                            <h1> Boovie</h1>
                            <p>
                                Boovie is a simple and fun way to discover great
                                movies and books based on reviews from people you trust.
                                You can save books and movies to your list,
                                share your favorite ones with friends,and keep track of
                                what others are watching and reading.
                            </p>
                            <p className="text">
                                First time on Boovie or already have an account?
                                Hurry up to join us
                            </p>
                        </div>

                        <div className="btn ">
                            <Link to="/signin" >
                                <button className="btn_login buttons">
                                Sign In
                                </button>
                            </Link>
                            <Link to="signup">
                                <button className="btn_signup buttons">
                                Sign Up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="blueline"/>
                <div className="why_boovie">
                    <div className="why_header">
                        <h1>Why Boovie?</h1>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div id="whyboovie_section">
                    <div className="about">Why Boovie?</div>
                    <p className="bec"> Want to find a movie to watch or book to read ? Boovie is here to help you!
                    </p>
                    <p className="df">
                        <p className="plain"> Your timeline shows what movies or books your frends prefer.You can
                            discuss any
                            of them and
                            let them know about your thoughts. Also it will be good to start read or watch something new
                            together.
                        </p>
                        <img
                            className="img2"
                            src={second}
                            alt="secondimg"/>
                    </p>
                    <p className="f"> Not sure if a movie or a book is good ?</p>
                    <p className="k"> For every movie and book,you can see reviews from people, also you can compare
                        them to
                        rotten
                        tomatoes or stars to see what the rest of the world thinks
                    </p>
                    <p className="h"> Want to connect with movie-lovers or bookoholics ? Boovie is that place!</p>
                    <p className="l"> Find your friends on Boovie or follow the users you like.You can see each user's
                        lists
                        and send them
                        direct messages. Go on!
                    </p>
                    <img className="j"
                         src={third}
                         alt="thirdimg"/>
                </div>
                <footer>
                    <p className="footer-center"> {"\u00A9"} 2019 Made with
                        <span className="heart-icon"><IoMdHeart/></span> by
                        Boovie
                        team </p>
                </footer>
            </div>
        );
    }
}

export default Welcome;