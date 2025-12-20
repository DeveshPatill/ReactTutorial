import React from 'react'

const SearchBar = () => {
  return (
    <div className="search-container">

      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search for a place..." />
      </div>
      <button className="search-btn">Search</button>

    </div>
  )
}

export default SearchBar