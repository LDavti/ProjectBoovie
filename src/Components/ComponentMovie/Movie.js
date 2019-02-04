import React, {Component} from 'react';
import './movie.css';
import fire from "../../config/Fire";
import {connectToUser} from '../../context/UserContext';

class Movie extends Component {

    handeleClick = () => {
        const {movie, user} = this.props;
        const {id, poster_path, title,overview} = movie;
        const isConfirmed = window.confirm("Want to add a movie to your profile?");
        if (isConfirmed) {
            fire.database().ref(`user/${user.uid}/movies/${id}`).set({
                movieId: id,
                images: poster_path,
                title: title,
                description:overview
            });
        }
    };

    render() {
        const {movie} = this.props;
        console.log(movie);
        return (
            <div className="all_movie_style">
                <div
                    title={movie.title}
                    className="movie_style"
                >
                    <img
                        src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        className="movie_poster"
                        id="movie_poster"
                        onClick={this.handeleClick}
                    />
                    <p className="movie_paragraph">
                        {movie.title}
                    </p>
                </div>
            </div>
        )
    }
}

export default connectToUser(Movie);