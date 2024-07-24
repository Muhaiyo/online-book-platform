import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Categories.css';

const categories = [
    {
        name: 'Dystopian',
        imageUrl: 'https://ew.com/thmb/8wrr3DbVI7wJKKTL99o6ckImwU0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-dystopian-novels-091322-5a06aa1c1d0f4e6fba5103af5e164306.jpg',
    },
    {
        name: 'Fiction',
        imageUrl: 'https://api.time.com/wp-content/uploads/2019/11/top-10-fiction-2019.jpg',
    },
    {
        name: 'Romance',
        imageUrl: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YG6OQE2SGRCGTIFWUL4VMRVVRU.jpg&w=1200',
    },
];

const Categories = () => {
    const navigate = useNavigate();

    const handleViewMore = () => {
        navigate('/products');
    };

    return (
        <div className="categories-section">
            <h2 className="categories-title">Explore Our Top Categories</h2>
            <div className="categories-list">
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <img src={category.imageUrl} alt={category.name} className="category-image" />
                        <p className="category-name">{category.name}</p>
                    </div>
                ))}
            </div>
            <button className="view-more-button" onClick={handleViewMore}>
                VIEW MORE
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00402 0L7.2215 0.780453L10.9101 4.45764H-0.00012207V5.54236H10.9101L7.22204 9.22009L8.00402 10L12.6263 5.38996L12.9999 5L12.6263 4.61004L8.00402 0Z" fill="#393280" />
                </svg>
            </button>
        </div>
    );
};

export default Categories;
