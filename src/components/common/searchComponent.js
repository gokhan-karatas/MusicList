import React, {Component} from 'react';

class SearchComponent extends Component {
    render() {
        return (
            <div className="search-root">
                <div className="search-wrapper">
                    <div className="search-block">
                        <div className="search-item">
                            <input type="text" placeholder="Ara"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchComponent;