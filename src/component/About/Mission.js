import React from 'react';
import './Mission.css';

const Mission = () => {
    return (
        <div className="mission-container">
            <div className="mission-text-container">
                <div className="mission-title">
                    Our Mission
                </div>
                <span className="mission-description">
                    Our mission is to revolutionize the way service-oriented <br /> organizations operate by providing them with the tools, insights, and support they need to succeed in today&#39;s competitive landscape. We are committed to helping our clients streamline their operations, enhance productivity, and achieve sustainable growth.
                </span>
            </div>
            <div className="mission-images-container">
                <div className="mission-image">
                    <img src="https://img.freepik.com/free-photo/light-bulb-with-drawing-graph_1232-2105.jpg?t=st=1716354753~exp=1716358353~hmac=59dc4de9f7b63ceaf6963f823d06dbe9bde07490448e375cb4f301da9a372e9b&w=740" alt="Image 1" className="image-content" />
                </div>
                <div className="mission-image">
                    <img src="https://img.freepik.com/free-photo/growth-progress-development-icon-concept_53876-15832.jpg?t=st=1716354357~exp=1716357957~hmac=d28b877ea014ba88898f757de6c0a42a0a6e5c0881f28029e76827a6b4ca7b21&w=740" alt="Image 2" className="image-content" />
                </div>
                <div className="mission-image-large">
                    <img src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?t=st=1716354285~exp=1716357885~hmac=6a92dd23a0a8f2a21a4d786f39e48c40d4d34ab8dc2f5c5a9f02c2681fbe5a00&w=740" alt="Image 3" className="image-content" />
                </div>
            </div>
        </div>
    );
}

export default Mission;
