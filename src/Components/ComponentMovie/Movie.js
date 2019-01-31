import React, {Component} from 'react';
import './movie.css';

class Movie extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className="all_movie_style" >
                <div
                    title={this.props.title}
                    className="movie_style"
                >
                    <img
                        src={`http://image.tmdb.org/t/p/w500/${this.props.images}`}
                        className="movie_poster"
                        id="movie_poster"
                    />
                    <p className="movie_paragraph">
                        {this.props.title}
                    </p>
                </div>
            </div>
        )
    }
}

export default Movie;