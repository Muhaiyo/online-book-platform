import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../styles/Subscribe.css';

const Subscribe = () => {
    const [subscribed, setSubscribed] = useState(false);
    const [userExists, setUserExists] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUserExists(true);
        }
    }, []);

    const handleSubscribe = () => {
        setSubscribed(!subscribed);
        if (!subscribed) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'You have successfully subscribed!',
                showConfirmButton: false,
                timer: 2000
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'You have successfully unsubscribed!',
                showConfirmButton: false,
                timer: 2000
            });
        }
    };

    return (
        <div className="subscribe-section">
            <div className="subscribe-content">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, natus nisi inventore magnam sapiente quisquam, minus eius blanditiis aut, nostrum voluptates ducimus soluta minima deserunt.</p>
                {userExists && (
                    <div className="subscribe-email">
                        <span className="email-icon">📧</span>
                        <span className="email-text">contact@bookhaven.com</span>
                        <button className="subscribe-button" type="button" onClick={handleSubscribe}>
                            {subscribed ? (
                                <>
                                    Subscribed <span role="img" aria-label="check-mark">✅</span>
                                </>
                            ) : (
                                "Subscribe"
                            )}
                        </button>
                    </div>
                )}
                {!userExists && (
                    <p>Please log in to subscribe to our newsletter.</p>
                )}
            </div>
        </div>
    );
};

export default Subscribe;
