import React, {Component} from 'react';
import Books from '../ComponentBook/Books';
import Movies from '../ComponentMovie/Movies';
import "./PageTabs.css";


class PageTabs extends Component {
    state = {
        activeTab: "movies"
    };

    setActiveTab = (e) => {
        const {id} = e.target;
        this.setState({activeTab: id})
    };

    render() {
        const {activeTab} = this.state;
        return (
            <div style={{padding: 10}} >
                <div className="tabs">
                    <div onClick={this.setActiveTab} id="movies" className={activeTab === "movies" ? "active" : ""}>Movies</div>
                    <div onClick={this.setActiveTab} id="books" className={activeTab === "books" ? "active" : ""}>Books</div>
                </div>
                {
                    activeTab === "movies" ? <Movies /> : <Books />
                }
            </div>
        );
    }

}

export default PageTabs;