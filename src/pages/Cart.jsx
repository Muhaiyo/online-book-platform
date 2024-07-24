import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import '../styles/Cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCart = async () => {
            const userData = JSON.parse(localStorage.getItem('user'))
            try {
                const response = await fetch(`http://localhost:3000/cart?user_id=${userData.user.id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCart(data);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        fetchCart();
    }, []);

    const handleRemoveFromCart = async (bookId) => {
        console.log(`Attempting to delete book with ID: ${bookId}`);
        try {
            const response = await fetch(`http://localhost:3000/cart/${bookId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const updatedCart = cart.filter(book => book.id !== bookId);
            setCart(updatedCart);
            console.log('Book removed from cart successfully');
            Swal.fire({
                icon: 'success',
                title: 'Successfully deleted!',
                text: 'You deleted the product from the cart',
            });
        } catch (error) {
            console.error('Error removing book from cart:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while removing the book from the cart. Please try again later.',
            });
        }
    };

    const handleOrderBook = async (bookId) => {
        console.log(`Attempting to order book with ID: ${bookId}`);
        try {
            const response = await fetch(`http://localhost:3000/cart/${bookId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const updatedCart = cart.filter(book => book.id !== bookId);
            setCart(updatedCart);
            console.log('Book ordered successfully');
            Swal.fire({
                icon: 'success',
                title: 'Order Placed!',
                text: 'You have successfully ordered the book',
            });
            setTimeout(() => {
                Swal.fire({
                    icon: 'info',
                    title: 'Our manager will contact you soon',
                    text: 'Our manager will contact you soon to discuss the details of your order.',
                });
            }, 2000);
        } catch (error) {
            console.error('Error ordering book:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while ordering the book. Please try again later.',
            });
        }
    };

    const handleBookClick = (bookTitle) => {
        navigate(`/books/title/${encodeURIComponent(bookTitle)}`);
    };

    return (
        <div className='Products fade-in'>
            <Header />
            <div className="cart-page">
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <img src="https://d16py1fyt83ijv.cloudfront.net/vedobi/assets/img/empty-cart.webp" alt="Empty Cart" />
                    </div>
                ) : (
                    <div className="cart-items">
                        {cart.map(book => (
                            <div key={book.id} className="cart-item" onClick={() => handleBookClick(book.title)}>
                                <img src={book.image_url} alt={book.title} />
                                <div className="cart-item-details">
                                    <h3>{book.title}</h3>
                                    <p>{book.author}</p>
                                    <p>${book.price}</p>
                                    <button onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemoveFromCart(book.id);
                                    }}>Remove</button>
                                    <button className="order" onClick={(e) => {
                                        e.stopPropagation();
                                        handleOrderBook(book.id);
                                    }}>Order</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Cart;




