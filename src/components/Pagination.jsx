import React from 'react';

const Pagination = ({ currentPage, totalBooks, booksPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalBooks / booksPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <button 
                onClick={handlePreviousPage} 
                disabled={currentPage === 1}
            >
                Назад
            </button>
            <span>{currentPage} из {totalPages}</span>
            <button 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
            >
                Вперед
            </button>
        </div>
    );
};

export default Pagination;
