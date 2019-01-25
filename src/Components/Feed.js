import React, {Component} from 'react';
// import {Link, NavLink} from "react-router-dom";
import fire from "../config/Fire";

const url = "https://api.themoviedb.org/3/movie/";
const img_url = "http://image.tmdb.org/t/p/";
const api_key = "bb02a460de04ad1eb828328b58cab6bf";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            page: 1
        };

    }

    logout = () => {
        fire.auth().signOut()
    };

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        fetch(`${url}popular?api_key=${api_key}&page=${this.state.page}`, {
            method: "get",
            "Access-Control-Allow-Origin": "*"
        }).then(res => res.json()).then(json => {
            this.setState({movies: json.results});
        });
    };

    pageChange = (e) => {
        const {name} = e.target;
        this.setState(state => ({
            page: name === "next" ? state.page + 1 : state.page - 1
        }), this.getMovies);
    };

    render() {
        return (
            <div>
                <h1>MY Feed</h1>
                <button onClick={this.logout}>Logout</button>
                <div style={{display: "flex"}}>
                    {
                        this.state.movies.map(movie => (
                            <div key={movie.id}>
                                {movie.title}
                                <img alt="poster..." src={`${img_url}w500${movie.poster_path}`}/>
                            </div>
                        ))
                    }
                    <button name="next" onClick={this.pageChange}>next</button>
                </div>
            </div>
        );
    }
}

export default Feed;