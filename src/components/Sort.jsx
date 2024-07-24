import React from 'react';
import '../styles/Sort.css';

const Sort = ({ onSortChange }) => {
    return (
        <div className="sort">
            <h3>Sort by</h3>
            <select onChange={(e) => onSortChange(e.target.value)}>
                <option value="id">ID</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="date-asc">Oldest to Newest</option>
                <option value="date-desc">Newest to Oldest</option>
            </select>
        </div>
    );
};

export default Sort;
