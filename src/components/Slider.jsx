import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import booksData from '../booksData';
import '../styles/Slider.css';

const Slider = () => {
    const [currentBookIndex, setCurrentBookIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const nextBook = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentBookIndex((prevIndex) => (prevIndex === booksData.length - 1 ? 0 : prevIndex + 1));
            setIsAnimating(false);
        }, 500); 
    };

    const prevBook = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentBookIndex((prevIndex) => (prevIndex === 0 ? booksData.length - 1 : prevIndex - 1));
            setIsAnimating(false);
        }, 500);
    };

    const currentBook = booksData[currentBookIndex];

    return (
        <div className="slider">
            <div className={`slider-content ${isAnimating ? 'animating' : ''}`}>
                <div className="slider-text">
                    <h2>{currentBook.title}</h2>
                    <p>{currentBook.description}</p>
                    <button className="read-more" onClick={() => navigate(`/books/${currentBook.id}`)}>Read More</button>
                </div>
                <div className="slider-image">
                    <img src={currentBook.image_url} alt={currentBook.title} />
                </div>
            </div>
            <div className="arrows">
                <button className="prev" onClick={prevBook}>
                    &#10094;
                </button>
                <button className="next" onClick={nextBook}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Slider;
