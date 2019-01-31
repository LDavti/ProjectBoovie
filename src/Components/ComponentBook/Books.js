import React, {Component} from 'react';
import Book from "./book";
import Pagination from "../ComponentPagination/Pagination";
import "./books.css";
import book1 from "../../gifs/book1.gif";

const url = "https://www.googleapis.com/books/v1";
// const api_key = 'LvgVAflYuaRxQhQuyk6lg';


class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            page: 1,
            isLoading: false
        };
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        this.setState({
            isLoading: true
        });
        fetch(`${url}/volumes?q=""&startIndex=${(this.state.page - 1) * 20}&maxResults=20`, {
            method: "get",
            "Access-Control-Allow-Origin": "no-cors"
        }).then(res => res.json()).then(json => {
            this.setState({books: json.items, isLoading: false});
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
        if(this.state.isLoading){
            return (<img src={book1} alt="thereisagif" className="loader"/>);
        }

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




