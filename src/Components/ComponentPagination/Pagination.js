import React, {Component} from 'react';
import "./Pagination.css";

class Pagination extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.handleClick = this.handleClick.bind(this);
    // }

    handleClick = (event) =>{
        // console.log(Number(event.target.id), 'Number(event.target.id)');
        this.props.pageChange( Number(event.target.id));
    };

    render() {
        const {page}=this.props;
        const pageNumbers = [];
        for (let i = 1; i <= 10; i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    className={number === page ? "active" : ""}
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <ul className="pagination">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}

export default Pagination;

