import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BookCard = ({ book, onAddToCart, user }) => {
    const handleAddToCart = () => {
        const userData = JSON.parse(localStorage.getItem('user'));
        let new_book = {...book}
        new_book.user_id = userData.user.id;
        delete new_book.id;
        if (userData) {
            fetch('http://localhost:3000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(new_book)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Book added to cart successfully:', data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Added to Cart',
                        text: 'The book has been added to your cart',
                    });
                    onAddToCart(new_book);
                })
                .catch(error => {
                    console.error('Error adding book to cart:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'An error occurred while adding the book to the cart. Please try again later.',
                    });
                });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Need to login',
                text: 'Please log in to add items to your cart',
            });
        }
    };

    return (
        <Link to={`/books/${book.id}`} className="book-card-link">
            <div className="book-card">
                <div className="book-image">
                    <img src={book.image_url} alt={book.title} />
                </div>
                <div className="book-details">
                    <h3>{book.title}</h3>
                    <span>{book.author}</span>
                    <p>${book.price}</p>
                    <button onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>Add to Cart</button>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;
