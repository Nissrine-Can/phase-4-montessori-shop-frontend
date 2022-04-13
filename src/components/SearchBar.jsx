import React from 'react'

const SearchBar = ({ searchTerm, onSearchChange }) => {

 return (
     <div className="search-bar">
    <div className="ui search">
        <div className="ui icon input">
            <input 
                type="text"
                id="search"
                placeholder="Type a name to search..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <i className="search icon" />
        </div>
    </div>
    </div>
  )
}

export default SearchBar