import React, {Component} from 'react';
import Book from "./book";

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

    pageChange = (e) => {
        const {name} = e.target;
        this.setState(state => ({
            page: name === "next" ? state.page + 1 : state.page - 1
        }), this.getBooks);
    };

    render() {
        return (
            <div className="all_books_page">
                <div
                    className="all_books"
                    style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "flex-start",
                        flexWrap: "wrap"
                    }}
                >
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
                <button name="next" onClick={this.pageChange}>next</button>
            </div>
        )
    }
}
export default Books;




