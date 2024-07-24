import React from 'react';
import '../styles/ContactUs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


const ContactUs = () => {
    return (
        <div className='fade-in'>
            <Header />
            <div className="contact-us">
                <div className="contact-us-content">
                    <h1>How to Contact Us?</h1>
                    <img src='https://client-ui.s3.ap-south-1.amazonaws.com/Website/Images/Hero-Contact-Image.svg' alt="Contact Us" className="main-image" />
    
                    <section className="contact-methods">
                        <div className="contact-details">
                            <div className="info">
                                <h2>Our Contact Information</h2>
                                <h3>Employee Contacts</h3>
                                <p>John Doe - (123) 456-7891</p>
                                <p>Jane Smith - (123) 456-7892</p>
                                <p>Emily Johnson - (123) 456-7893</p>
                            </div>
                            <div className="image">
                                <img src='https://hr-gazette.com/wp-content/uploads/2018/10/bigstock-196164373.jpg' alt="Team Contacts" />
                            </div>
                        </div>
    
                    </section>
                        <div className="contact-details">
                            <div className="info">
                                <h3>Company Contact</h3>
                                <p>Main Office - (123) 456-7890</p>
                                <p>Email: contact@yourbookstore.com</p>
                            </div>
                            <div className="image">
                                <img src='https://img.freepik.com/premium-photo/contact-us-customer-support-hotline-people-connect-close-up-businessman-holding-tablet-using-device-contact-people-contacting-information-business-contact-us-messaging-calling-email_256259-3378.jpg?w=1380' alt="Company Contact" />
                            </div>
                        </div>
    
                    <section className="store-location">
                        <div className="location-info">
                            <h2>Our Location</h2>
                            <p>123 Book Street, Booktown, BK 12345</p>
                            <p>We are located in the heart of Booktown, easily accessible by public transportation and with ample parking space available. Come visit us and explore our extensive collection of books!</p>
                        </div>
                        <div className="image">
                            <img src='https://www.lifewire.com/thmb/YBQuRMKxxhx3Zb3uJ1x-QOT6VsM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Maplocation_-5a492a4e482c52003601ea25.jpg' alt="Store Location" />
                        </div>
                    </section>
                </div>
            </div>
                <Footer />
        </div>
    );
};

export default ContactUs;
