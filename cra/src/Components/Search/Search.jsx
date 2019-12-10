import React from 'react';
import './Search.css';

function Search() {
    return (
        <section className="search">
        <input type="search" placeholder="Search query..."/>
        <button>Search</button>
    </section>
    );
}

export default Search;