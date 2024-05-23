import React from 'react';
import './Qualities.css'

import benefit1 from '../../assets/benefit1.svg';
import benefit2 from '../../assets/benefit2.svg';

// Example background image URL from Google Images (replace with your actual image URL)
const backgroundImageUrl = "https://img.freepik.com/free-vector/gradient-bokeh-white-background_53876-99912.jpg?t=st=1716359114~exp=1716362714~hmac=b20e02325ba2b5a8b4767ea097b090af414e97d28b807edfc268076f74042644&w=740";

export const Qualities = () => {
    return (
        <div className="qualities-container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <div className="qualities-title-container">
                <span className="qualities-title">
                    What Sets Us Apart
                </span>
            </div>
            <div className="qualities-cards-container">
                <div className="qualities-card">
                    <div className="qualities-card-content">
                        <img className="qualities-card-icon" src={benefit1} alt="Expertise Icon" />
                        <div>
                            <div className="qualities-card-title">
                                Expertise
                            </div>
                            <span className="qualities-card-description">
                                Our team brings a wealth of experience and expertise in the service industry, enabling us to understand the intricacies and challenges faced by businesses in this sector.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="qualities-card">
                    <div className="qualities-card-content">
                        <img className="qualities-card-icon" src={benefit2} alt="Innovation Icon" />
                        <div>
                            <div className="qualities-card-title">
                                Innovation
                            </div>
                            <span className="qualities-card-description">
                                We are committed to staying ahead of the curve by leveraging the latest technologies and best practices to develop innovative solutions that drive real results.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="qualities-cards-container">
                <div className="qualities-card">
                    <div className="qualities-card-content">
                        <img className="qualities-card-icon" src={benefit1} alt="Client-Centric Approach Icon" />
                        <div>
                            <div className="qualities-card-title">
                                Client-Centric Approach
                            </div>
                            <span className="qualities-card-description">
                                We prioritize the needs and goals of our clients, taking a collaborative approach to ensure our solutions are tailored to their specific requirements.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="qualities-card">
                    <div className="qualities-card-content">
                        <img className="qualities-card-icon" src={benefit2} alt="Results-Driven Icon" />
                        <div>
                            <div className="qualities-card-title">
                                Results-Driven
                            </div>
                            <span className="qualities-card-description">
                                We are focused on delivering tangible outcomes and measurable impact, helping our clients optimize their operations and achieve their business objectives.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qualities;
