import React, {Component} from 'react';

// const url = "https://www.goodreads.com/book/isbn/";
// const img_url = "http://image.tmdb.org/t/p/";
// const api_key = "bb02a460de04ad1eb828328b58cab6bf";


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
        fetch(`"https://www.goodreads.com/book/isbn/" + isbn + "?key=" + key`, {
            method: "get",
            "Access-Control-Allow-Origin": "*"
        }).then(res => res.json()).then(json => {
            console.log(json);
            // this.setState({books: json.results});
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
            <div className="all_movies_page">
                <div
                    className="all_movies"
                    style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "flex-start",
                        flexWrap: "wrap"
                    }}
                >
                    {
                        this.state.books.map(book => (
                            <div></div>
                        ))
                    }
                </div>
                <button name="next" onClick={this.pageChange}>next</button>
            </div>
        )
    }
}

export default Books;