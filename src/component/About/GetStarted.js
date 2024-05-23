import React from 'react';
import contact from '../../assets/contact.png'; // Ensure you import your image correctly

export const GetStarted = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img
                        src={contact} // Replace with your actual image URL
                        alt="Placeholder"
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-lg-6">
                    <h2 className="mb-3 font-weight-bold text-dark">Get Started Today</h2>
                    <p className="mb-3 text-muted">
                        Sign up now for a consultation and see how we can help transform your business.
                    </p>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-dark">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-dark">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email address"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label text-dark">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            placeholder="Type your message"
                            rows="4"
                        ></textarea>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block position-relative overflow-hidden transition duration-300 hover:bg-purple-700 hover:scale-105">
                        <span className="position-relative z-index-1">Submit</span>
                        <span className="position-absolute inset-0 bg-purple-700 opacity-0 transform scale-150 rounded"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};
