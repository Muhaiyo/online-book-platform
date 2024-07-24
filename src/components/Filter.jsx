import React from 'react';
import '../styles/Filter.css';

const Filter = ({ genres, onFilterChange }) => {
    return (
        <div className="filter">
            <div>
                <label>Genre:</label>
                <select onChange={(e) => onFilterChange('genre', e.target.value)}>
                    <option value="">All</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Page Count:</label>
                <select onChange={(e) => onFilterChange('pageCount', e.target.value)}>
                    <option value="">All</option>
                    <option value="101-300">101-300</option>
                    <option value="301-500">301-500</option>
                    <option value="501">501+</option>
                </select>
            </div>
            <div>
                <label>Price:</label>
                <select onChange={(e) => onFilterChange('price', e.target.value)}>
                    <option value="">All</option>
                    <option value="0-10">$0-10</option>
                    <option value="10-20">$10-20</option>
                    <option value="20">$20+</option>
                </select>
            </div>
            <div>
                <label>Publication Date:</label>
                <select onChange={(e) => onFilterChange('date', e.target.value)}>
                    <option value="">All</option>
                    <option value="1000-1500">1000-1500 years</option>
                    <option value="1500-2000">1500-2000 years</option>
                    <option value=">2000">Later than 2000 years</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
