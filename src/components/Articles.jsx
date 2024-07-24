import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Articles.css';

const articlesData = [
    {
        title: "Exploring the Depths of the Ocean",
        date: "May 24, 2024",
        description: "A deep dive into the mysterious and fascinating world beneath the waves.",
        image_url: "https://teambathmcta.com/wp-content/uploads/2023/06/deep-below-a-colorful-school-of-fish-swims-generative-ai.jpg"
    },
    {
        title: "The Wonders of Space",
        date: "April 12, 2024",
        description: "An exploration of the vast and amazing universe beyond our planet.",
        image_url: "https://i0.wp.com/eos.org/wp-content/uploads/2017/10/world-space-week-voyager-mission-solar-bubble-main.png?fit=820%2C615&ssl=1"
    },
    {
        title: "Advancements in Technology",
        date: "March 15, 2024",
        description: "A look at the latest innovations and breakthroughs in the tech world.",
        image_url: "https://miro.medium.com/v2/resize:fit:1400/0*dhPZUSYHs1BScj0p.jpg"
    }
];

const Articles = () => {
    const navigate = useNavigate();

    const handleViewAll = () => {
        navigate('/blog');
    };
    return (
        <div className="articles-section">
            <div className="articles-header">
                <p>some quality items</p>
                <div className="title-with-lines">
                    <div className="line"></div>
                    <h2>The Last Articles</h2>
                    <div className="line"></div>
                </div>
            </div>
            <div className="articles-content">
                {articlesData.map((article, index) => (
                    <div className="article" key={index}>
                        <img src={article.image_url} alt={article.title} />
                        <div className="article-info">
                            <p className="article-date">{article.date}</p>
                            <p className="article-description">{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="articles-footer">
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <button className="view-more-button" onClick={handleViewAll}>READ ALL ARTICLES<svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.94373 0.532715L7.19537 1.27994L10.7229 4.80055H0.289062V5.83908H10.7229L7.19589 9.36022L7.94373 10.1069L12.3642 5.69317L12.7215 5.31982L12.3642 4.94647L7.94373 0.532715Z" fill="black" />
                </svg></button>
            </div>
        </div>
    );
};

export default Articles;
