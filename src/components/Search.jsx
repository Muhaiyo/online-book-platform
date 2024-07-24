import React, { useState } from 'react';

const Search = ({ onSearchChange }) => {
    const [term, setTerm] = useState('');

    const handleInputChange = (e) => {
        const newTerm = e.target.value;
        setTerm(newTerm);
        onSearchChange(newTerm);
    };

    return (
        <div className="search">
            <input
                type="text"
                value={term}
                onChange={handleInputChange}
                placeholder="Search by name..."
            />
        </div>
    );
};

export default Search;
