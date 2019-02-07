import React, {Component} from 'react';
// import {Link, NavLink} from "react-router-dom";
import Movie from './Movie';
import './Movies.css';
import Pagination from '../ComponentPagination/Pagination';
import film from "../../gifs/film.gif";


const url = "https://api.themoviedb.org/3/movie/";
const api_key = "bb02a460de04ad1eb828328b58cab6bf";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            page: 1,
            isLoading: false,
        };

    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        this.setState({
            isLoading: true
        });
        fetch(`${url}popular?api_key=${api_key}&page=${this.state.page}`, {
            method: "get",
            "Access-Control-Allow-Origin": "*"
        }).then(res => res.json()).then(json => {
            this.setState({
                movies: json.results,
                isLoading: false,
            });
        });
    };

    pageChange = (pageNumber) => {
        this.setState({
            page: pageNumber
        }, () => {
            this.getMovies()
        });
    };

    // pageChange = (e) => {
    //     const {name} = e.target;
    //     this.setState(state => ({
    //         page: name === "next" ? state.page + 1 : state.page - 1
    //     }), this.getBooks);
    // };


    render() {
        // console.log(this.state.movies);
        if (this.state.isLoading) {
            return (<img src={film} alt="thereisagif" className="loader"/>);
        } else {
            return (
                <div className="all_movies_page">
                    <div className="all_movies">
                        {
                            this.state.movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    movie={movie}
                                />
                            ))
                        }
                    </div>
                    {/*<button name="next" onClick={this.pageChange}>next</button>*/}
                    <Pagination
                        page={this.state.page}
                        pageChange={this.pageChange}/>
                </div>
            );
        }
    }
}

export default Movies;

