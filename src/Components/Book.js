import React, {Component} from 'react';

class Book extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="all_book_style" style={{display: "flex"}}>
                <div
                    title={this.props.title}
                    className="book_style"
                    id="book_style"
                    style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}
                >
                    <img
                        src={`https://www.goodreads.com/book/show/2998152-javascript{this.props.images}`}
                        className="book_cover"
                        id="book_cover"
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

export default Book;