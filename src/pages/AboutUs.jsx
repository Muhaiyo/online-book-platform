import React from 'react';
import '../styles/AboutUs.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutUs = () => {
    const currentYear = new Date().getFullYear();
    const founderName = "Abdullo Kamoliddinov";
    const bookstoreName = "Book Haven";

    return (
        <div className='Products fade-in'>
            <Header />
            <div className='about-us'>
                <div className="about-us-content">
                    <h1>About Us</h1>
                    <section className="section">
                        <div className="image-content">
                            <img src='https://i0.wp.com/www.printmag.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-23-at-2.10.28-PM.png?fit=1568%2C998&quality=80&ssl=1' alt="Our Book Store" className="store-image" />
                        </div>
                        <div className="text-content">
                            <h2>Welcome to {bookstoreName}</h2>
                            <p>
                                Welcome to {bookstoreName}, your number one source for all books.
                                We're dedicated to giving you the very best of literature, with a focus on
                                three characteristics: dependability, customer service, and uniqueness.
                            </p>
                            <p>
                                Founded in {currentYear - 3} by {founderName}, {bookstoreName} has come a long way
                                from its beginnings in a small apartment. When {founderName} first started out, his passion for books
                                drove him to start this business, so that {bookstoreName} can offer you a diverse collection of books.
                                We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
                            </p>
                            <p>
                                We hope you enjoy our products as much as we enjoy offering them to you. If you have any
                                questions or comments, please don't hesitate to contact us.
                            </p>
                            <p>Sincerely, {founderName}</p>
                        </div>
                    </section>

                    <section className="section">
                        <div className="image-content">
                            <img src='https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/v2/C5GM72CBTUU7QKKQVM2S6WF55Q.jpg?smart=true&auth=7c656ad19efb6a6767c9cceea2082ca878d669910154918822d95ee1615b4e07&width=800&height=541' alt="Store History" className="history-image" />
                        </div>
                        <div className="text-content">
                            <h2>Our History</h2>
                            <p>
                                Our book store has a rich history that dates back to {currentYear - 5}. It all began with a passion for
                                books and a desire to create a community where book lovers could come together and share their
                                love for literature. Over the years, our store has grown and evolved, but our core values have
                                remained the same.
                            </p>
                            <p>
                                We started with a small collection of books in a quaint little shop. As word spread about our
                                store, we began to see more and more customers walk through our doors. Our commitment to providing
                                excellent customer service and a wide selection of books quickly made us a favorite among book
                                enthusiasts.
                            </p>
                            <p>
                                Throughout the years, we've hosted numerous events, book signings, and community gatherings.
                                We've also expanded our collection to include a diverse range of genres and authors. Today,
                                we're proud to be a cornerstone of the community and a destination for book lovers from all
                                walks of life.
                            </p>
                        </div>
                    </section>

                    <section className="section">
                        <div className="image-content">
                            <img src='https://media.newyorker.com/photos/62eae6cd3bff8791efebc140/master/pass/norman-good-bookstore.jpg' alt="Community" className="community-image" />
                        </div>
                        <div className="text-content">
                            <h2>Our Community</h2>
                            <p>
                                At {bookstoreName}, we believe in the power of community. Our store isn't just a place to
                                buy books; it's a hub for book lovers to connect, share ideas, and engage in meaningful conversations.
                                We host regular events, including book signings, readings, and discussions, to foster a sense of
                                community and encourage a love of reading.
                            </p>
                            <p>
                                Our commitment to our community goes beyond the walls of our store. We actively participate in
                                local events and support various community initiatives. We believe in giving back and strive to
                                make a positive impact in our neighborhood.
                            </p>
                        </div>
                    </section>

                    <section className="section">
                        <div className="image-content">
                            <img src='https://walkerbookstore.com/wp-content/uploads/2023/03/Walker-Books-Team.jpg' alt="Our Team" className="team-image" />
                        </div>
                        <div className="text-content">
                            <h2>Meet Our Team</h2>
                            <p>
                                Our team is composed of passionate book lovers who are dedicated to providing the best experience
                                for our customers. From our knowledgeable staff who can recommend the perfect book to our friendly
                                customer service team, everyone at {bookstoreName} shares a love for books and a commitment
                                to excellent service.
                            </p>
                            <p>
                                We believe that our team is our greatest asset. Their enthusiasm, expertise, and dedication are
                                what make our store special. We are proud to have a team that goes above and beyond to ensure that
                                every customer leaves our store happy and satisfied.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;

