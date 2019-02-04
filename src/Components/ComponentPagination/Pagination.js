import React, {Component} from 'react';
import "./Pagination.css";

class Pagination extends Component {

    handleClick = (event) =>{
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

