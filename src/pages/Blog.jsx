import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Blog.css';

const articlesData = [
    {
        title: "Exploring the Depths of the Ocean",
        date: "May 24, 2024",
        description: "A deep dive into the mysterious and fascinating world beneath the waves. The ocean, covering more than 70% of the Earth's surface, holds countless secrets and wonders. From the vibrant coral reefs teeming with life to the dark, unexplored trenches, the marine environment is a treasure trove of biodiversity and beauty. Marine biologists and oceanographers have been striving to unlock the mysteries of the deep, employing advanced technology and methods to study the unique ecosystems and species that inhabit this vast underwater realm. The health of our oceans is crucial for the overall well-being of our planet, and ongoing research and conservation efforts are vital to protect these precious resources.",
        image_url: "https://teambathmcta.com/wp-content/uploads/2023/06/deep-below-a-colorful-school-of-fish-swims-generative-ai.jpg"
    },
    {
        title: "The Wonders of Space",
        date: "April 12, 2024",
        description: "An exploration of the vast and amazing universe beyond our planet. Space, the final frontier, has always captivated the human imagination. From the stunning beauty of distant galaxies to the potential for discovering extraterrestrial life, the universe offers endless opportunities for exploration and discovery. Astronomers and astrophysicists are continuously expanding our understanding of the cosmos through powerful telescopes and space missions. Recent advancements in space technology have made it possible to explore planets, moons, and other celestial bodies in unprecedented detail. As we look to the stars, we not only seek to answer fundamental questions about our place in the universe but also to inspire future generations of scientists and explorers.",
        image_url: "https://i0.wp.com/eos.org/wp-content/uploads/2017/10/world-space-week-voyager-mission-solar-bubble-main.png?fit=820%2C615&ssl=1"
    },
    {
        title: "Advancements in Technology",
        date: "March 15, 2024",
        description: "A look at the latest innovations and breakthroughs in the tech world. Technology is advancing at a breakneck pace, transforming every aspect of our lives. From artificial intelligence and machine learning to blockchain and quantum computing, new technologies are driving innovation and creating opportunities across various industries. The rise of smart devices and the Internet of Things (IoT) has made it possible to connect and automate our homes, workplaces, and cities like never before. Meanwhile, breakthroughs in biotechnology and medical research are revolutionizing healthcare, offering new treatments and improving patient outcomes. Staying ahead of these trends is essential for businesses and individuals alike, as technology continues to shape the future.",
        image_url: "https://miro.medium.com/v2/resize:fit:1400/0*dhPZUSYHs1BScj0p.jpg"
    }
];
const Blog = () => {
    return (
        <div className='Products fade-in'>
            <Header />
            <div className="blog-page">
                <h1>The Latest Articles</h1>
                <div className="articles-container">
                    {articlesData.map((article, index) => (
                        <div key={index} className="article-card">
                            <h2>{article.title}</h2>
                            <p className="article-date">{article.date}</p>
                            <img src={article.image_url} alt={article.title} className="article-image" />
                            <p className="article-description">{article.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
