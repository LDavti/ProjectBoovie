import React, {Component} from 'react';

class Movie extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="all_movie_style" style={{display: "flex"}}>
                <div
                    title={this.props.title}
                    className="movie_style"
                    id="movie_style"
                    style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}
                >
                    <img
                        src={`http://image.tmdb.org/t/p/w500/${this.props.images}`}
                        className="movie_poster"
                        id="movie_poster"
                        style={{width: 150, height: 100, objectFit: "cover", margin: "0 10px"}}
                    />
                    <p style={{display: "inline-block", maxWidth: 150, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                        {this.props.title}
                    </p>
                </div>
            </div>
        )
    }
}

export default Movie;