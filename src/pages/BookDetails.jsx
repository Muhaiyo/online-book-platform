import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookDetails.css';

const BookDetails = () => {
    const { id, title } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url = `http://localhost:3000/books`;
        if (id) {
            url += `/${id}`;
        } else if (title) {
            url += `?title=${encodeURIComponent(title)}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setBook(Array.isArray(data) ? data[0] : data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching book data:', error);
                setLoading(false);
            });
    }, [id, title]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className="book-detail-container">
            <div className="book-details-content">
                <img src={book.image_url} alt={book.title} className="book-detail-image" />
                <div className="book-detail-information">
                    <h2>{book.title}</h2>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <p><strong>Price:</strong> ${book.price}</p>
                    <p><strong>Publication Date:</strong> {new Date(book.publication_date).toDateString()}</p>
                    <p><strong>Page Count:</strong> {book.page_count}</p>
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
