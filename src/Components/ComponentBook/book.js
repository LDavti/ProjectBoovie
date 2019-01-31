import React, {Component} from 'react';
import "./book.css";

class Book extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className="all_book_style" >
                <div title={this.props.title} className="book_style">
                    <img
                    src={`http://books.google.com/books/content?id=${this.props.id}&printsec=frontcover&img=1&zoom=1&source=${this.props.book}`}
                    className="book_poster"
                    />
                    <p className="book_paragraph">
                        {this.props.title}
                    </p>
                </div>
            </div>
        )
    }
}

export default Book;