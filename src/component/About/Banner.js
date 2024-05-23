import React from 'react';
import './Banner.css'; // Importing the CSS file for styles

export const Banner = () => {
    return (
        <div className="custom-banner">
            <div className="custom-divider"></div>
            <div className="custom-content">
                <div className="custom-title">
                    About Us
                </div>
                <div className="custom-text">
                    <p>
                        At Optimizing Operations for Service-Oriented Organizations, we are dedicated to empowering businesses in the service industry to thrive by overcoming operational challenges and maximizing efficiency. With a team of experienced professionals and a passion for innovation, we strive to deliver cutting-edge solutions tailored to the unique needs of each organization we work with.
                    </p>
                </div>
            </div>
        </div>
    )
}
