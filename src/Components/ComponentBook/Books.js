import React, {Component} from 'react';
import Book from "./book";
import Pagination from "../ComponentPagination/Pagination";
import "./books.css";

const url = "https://www.googleapis.com/books/v1";
// const api_key = 'LvgVAflYuaRxQhQuyk6lg';


class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            page: 1
        };
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        fetch(`${url}/volumes?q=""&startIndex=${(this.state.page - 1) * 20}&maxResults=20`, {
            method: "get",
            "Access-Control-Allow-Origin": "no-cors"
        }).then(res => res.json()).then(json => {
            console.log(json);
            this.setState({books: json.items});
        });
    };

    pageChange = (pageNumber) => {
        this.setState({
            page: pageNumber
        }, () => {
            this.getBooks()
        });
    };


    render() {
        return (
            <div className="all_books_page">
                <div className="all_books">
                    {
                        this.state.books.map(book => (
                            <Book
                                key={book.id}
                                id={book.id}
                                title={book.volumeInfo.title}
                                images={book}
                            />
                        ))
                    }
                </div>
                <Pagination
                    page={this.state.page}
                    pageChange={this.pageChange}/>
            </div>
        )
    }
}

export default Books;




