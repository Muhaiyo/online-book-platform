import React from 'react';
import BookCard from '../components/BookCard';

const BookList = ({ books, onAddToCart }) => {
    console.log(books);
    return (
        <div className="book-list">
            {books.map((book) => (
                <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default BookList;
