import React, {Component} from 'react';

class Book extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className="all_movie_style" style={{display: "flex"}}>
                <div
                    title={this.props.title}
                    className="movie_style"
                    id="movie_style"
                    style={{display: "flex", justifyContent: "center",
                        alignItems: "center", flexDirection: "column"}}>
                    < img
                    src={`http://books.google.com/books/content?id=${this.props.id}&printsec=frontcover&img=1&zoom=1&source=${this.props.book}`}
                    className="movie_poster"
                    id="movie_poster"
                    style={{width: 160, height: 100, objectFit: "cover", margin: "0 10px"}}/>
                    <p style={{display: "inline-block",
                        maxWidth: 150, overflow: "hidden",
                        textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                        {this.props.title}
                    </p>
                </div>
            </div>
        )
    }
}

export default Book;