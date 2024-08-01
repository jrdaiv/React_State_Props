import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <input className='form-control' value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} type="text" placeholder="Search for a movie..." />
        </div>
    );
};





export default SearchBar;










