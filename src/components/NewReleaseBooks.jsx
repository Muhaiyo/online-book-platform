import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewReleaseBooks.css';

const books = [
    {
        title: "The Catcher in the Rye",
        description: "A novel about teenage rebellion and angst.",
        author: "J.D. Salinger",
        price: "$6.99",
        image_url: "https://whitmorerarebooks.cdn.bibliopolis.com/pictures/5857.jpg?auto=webp&v=1699559953"
    },
    {
        title: "Moby-Dick",
        description: "A novel about the voyage of the whaling ship Pequod.",
        author: "Herman Melville",
        price: "$11.99",
        image_url: "https://whitmorerarebooks.cdn.bibliopolis.com/pictures/5122.jpg?auto=webp&v=1712682664"
    },
    {
        title: "War and Peace",
        description: "A novel that intertwines the lives of several families during the Napoleonic Wars.",
        author: "Leo Tolstoy",
        price: "$12.99",
        image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686602284i/177106015.jpg"
    },
    {
        title: "Crime and Punishment",
        description: "A novel about the mental anguish and moral dilemmas of a young man who plans a crime.",
        author: "Fyodor Dostoevsky",
        price: "$9.99",
        image_url: "https://m.media-amazon.com/images/I/71O2XIytdqL._AC_UF1000,1000_QL80_.jpg"
    }
];

const NewReleaseBooks = () => {
    const navigate = useNavigate();

    const handleViewAll = () => {
        navigate('/products');
    };

    return (
        <div className="new-release-books">
            <p className="sub-title">some quality items</p>
            <div className="title-with-lines">
                <span className="line"></span>
                <h2>New Release Books</h2>
                <span className="line"></span>
            </div>
            <div className="books-list">
                {books.map((book, index) => (
                    <div key={index} className="book-item">
                        <img src={book.image_url} alt={book.title} />
                        <h3>{book.title}</h3>
                        <span>{book.author}</span>
                        <p className="price">{book.price}</p>
                    </div>
                ))}
            </div>
            <button className="view-all" onClick={handleViewAll}>
                VIEW ALL PRODUCTS
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00414 0L7.22162 0.780453L10.9102 4.45764H0V5.54236H10.9102L7.22216 9.22009L8.00414 10L12.6264 5.38996L13 5L12.6264 4.61004L8.00414 0Z" fill="#393280" />
                </svg>
            </button>
        </div>
    );
};

export default NewReleaseBooks;

