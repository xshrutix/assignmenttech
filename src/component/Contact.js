import React from 'react';
import './Home.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center p-3" style={{ backgroundColor: 'rgba(231, 232, 236, 1)' }}>
        <div className="first-box d-flex flex-column align-items-center justify-content-center mb-4 mt-4 p-4" >
          <span className="text-center fs-1">Get In Touch</span>
          <p className="text-center mt-3">
            Thank you for your interest in Optimizing Operations for Service-Oriented Organizations. We're here to help you streamline your operations and drive success in your organization. Please feel free to reach out to us with any questions, inquiries, or feedback. We look forward to hearing from you!
          </p>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="card" style={{ boxShadow: 'rgba(41, 41, 41, 0.08)!important', borderRadius: '22px' }}>
          <div className="card-body" style={{ boxShadow: 'rgba(41, 41, 41, 0.08)', borderRadius: '22px' }}>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="imagebox" style={{ backgroundColor: "rgba(231, 232, 236, 1)", width: '100%', maxWidth: '442px', height: 'auto', borderRadius: '16px', padding: '20px', paddingTop: '40px', paddingBottom: '40px' }}>
                  <h3 style={{ fontSize: '20px' }}>Contact Information</h3>
                  <p className='mt-3 mb-5' style={{ fontSize: '16px' }}>Please feel free to reach out to us with any questions, inquiries, or feedback. We look forward to hearing from you!</p>

                  <div className="mb-4" style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi bi-telephone-fill" style={{ marginRight: '10px', fontSize: '30px' }}></i>
                    <span className='ms-2' style={{ fontSize: '16px' }}>Your Company Phone Number</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi bi-envelope-fill" style={{ marginRight: '10px', fontSize: '30px' }}></i>
                    <span className="ms-2" style={{ fontSize: '16px' }}>[Your Company Email Address]</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi bi-geo-alt-fill" style={{ marginRight: '10px', fontSize: '30px' }}></i>
                    <span className='ms-2 mt-4' style={{ fontSize: '16px' }}>[Your Company Address]<br />[City, State, Zip Code]<br />[Country]</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                <div className="abobox">
                  <form className="row g-3 mt-2" onSubmit={handleSubmit}>
                    <div className="col-sm-12">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Enter name" />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter email address" />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                      <input type="text" className="form-control" id="phoneNumber" placeholder="Enter Phone number" />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control" id="message" placeholder="Enter your message" style={{ height: "100px" }}></textarea>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn text-light" style={{ backgroundColor: 'rgba(76, 175, 79, 1)' }}>Submit <i className="bi bi-arrow-right"></i></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58230.15160439485!2d73.97441068458943!3d18.50607242186428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c22161862853%3A0x5ed70272d869e104!2sAmanora%20The%20Fern%20-%20An%20Ecotel!5e0!3m2!1sen!2sin!4v1716394052902!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: '100%', height: '100%', borderRadius: '24px' }}
          className="responsive-map"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
