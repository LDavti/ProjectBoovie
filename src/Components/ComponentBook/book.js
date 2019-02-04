import React, {Component} from 'react';
import "./book.css";
import {connectToUser} from '../../context/UserContext';
import fire from "../../config/Fire";

class Book extends Component {

    handeleClick = () => {
        const {book, user} = this.props;
        const {id, volumeInfo} = book;
        const isConfirmed = window.confirm("Want to add a book to your profile?");
        if (isConfirmed) {
            fire.database().ref(`user/${user.uid}/books`).push().set({
                bookId: id,
                images: book,
                title: volumeInfo.title
            });
        }
    };

    render() {
        const {book} = this.props;

        return (
            <div className="all_book_style">
                <div title={book.volumeInfo.title} className="book_style">
                    <img
                        src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=${book}`}
                        className="book_poster"
                        onClick={this.handeleClick}
                    />
                    <p className="book_paragraph">
                        {book.volumeInfo.title}
                    </p>
                </div>
            </div>
        )
    }
}

export default connectToUser(Book);