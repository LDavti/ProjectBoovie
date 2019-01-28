import React, {Component} from 'react';
import Movie from '../Components/Movie';

const url = "https://api.themoviedb.org/3/movie/";
const img_url = "http://image.tmdb.org/t/p/";
const api_key = "bb02a460de04ad1eb828328b58cab6bf";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            page: 1
        };

    }

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
            <div className="all_movies_page">
                <div
                    className="all_movies"
                    style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "flex-start",
                        flexWrap: "wrap"
                    }}
                >
                    {
                        this.state.movies.map(movie => (
                            <Movie
                                key={movie.id}
                                title={movie.title}
                                images={movie.poster_path}
                            />
                        ))
                    }

                </div>
                <button name="next" onClick={this.pageChange}>next</button>
            </div>
        );
    }
}

export default Movies;