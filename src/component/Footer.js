import { Link } from 'react-router-dom';
import './Footer.css';
import fb from './fb.png'
import in1 from './in.png'
import tw from './tw.png'
import li from './li.png'

function Footer() {
    return (
        <>
            <footer className="text-muted py-5 border-top" style={{ backgroundImage: 'linear-gradient(180deg, #000044 0%, #000028 100%)', color: 'white' }}>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="footer-contact">
                                <h2 className='mb-4 fw-bold text-light ' style={{ fontSize: '20px' }}>
                                    <i className="bi bi-people-fill text-light me-1"></i>ServifyTech
                                </h2>
                                <h6 style={{ color: 'rgba(136, 136, 136, 1)', fontSize: '14px' }}>Copyright © 2024 ServifyTech Pte. Ltd.</h6>
                                <h6 style={{ color: 'rgba(136, 136, 136, 1)', fontSize: '14px' }}>All rights reserved</h6>
                                <div className="footer-social mt-5 mb-2">

                                    <Link to="https://www.facebook.com//" className='me-2' target='_blank'>
                                        <img src={fb} alt="Image 1" className="img-fluid mb-2" style={{ width: '32px', height: '32px' }} />

                                    </Link>
                                    <Link to="https://www.instagram.com/" className='me-2' target='_blank'>
                                        <img src={in1} alt="Image 1" className="img-fluid mb-2" style={{ width: '32px', height: '32px' }} />
                                    </Link>
                                    <Link to="https://www.twitter.com/" className='me-2' target='_blank'>
                                        <img src={tw} alt="Image 1" className="img-fluid mb-2" style={{ width: '32px', height: '32px' }} />
                                    </Link>
                                    <Link to="https://www.linkedin.com//" className='me-2' target='_blank'>
                                        <img src={li} alt="Image 1" className="img-fluid mb-2" style={{ width: '32px', height: '32px' }} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap justify-content-between col-lg-6 col-md-6">
                            <div className='footer-link'>
                                <h2 className='text-light mb-3' style={{ fontSize: "20px" }}>Company</h2>
                                <Link to='/' className='lk mt-2
                                ' style={{ textDecoration: 'none' }} target='_blank'>
                                    <span className='ms-3 lk' style={{ color: 'rgba(136, 136, 136, 1)', fontSize: '14px' }}>About us</span>
                                </Link><br />
                                <Link to='/' className='lk mt-2
                                ' style={{ textDecoration: 'none' }} target='_blank'>
                                    <span className='ms-3 lk' style={{ color: 'rgba(136, 136, 136, 1)', fontSize: '14px' }}>Services</span>
                                </Link><br />
                                <Link to='/pricing' className='lk mt-2
                                ' style={{ textDecoration: 'none' }} target='_blank'>
                                    <span className='ms-3 lk' style={{ color: 'rgba(136, 136, 136, 1)', fontSize: '14px' }}>Pricing</span>
                                </Link><br />
                                <Link to='/' className='lk mt-2
                                ' style={{ textDecoration: 'none' }} target='_blank'>
                                    <span className='ms-3 lk' style={{ color: 'rgba(136, 136, 136, 1)', fontSize: '14px' }}>Careers</span>
                                </Link><br />
                                <Link to='/contact' className='lk mt-2
                                ' style={{ textDecoration: 'none' }} target='_blank'>
                                    <span className='ms-3 lk' style={{ color: 'rgba(136, 136, 136, 1)', fontSize: '14px' }}>Contact Us</span>
                                </Link><br />
                            </div>
                            <div className='footer-link'>
                                <h2 className='text-light mb-3' style={{ fontSize: "20px" }}>Services</h2>
                                <Link to='/' className='l
                                ' style={{ textDecoration: 'none' }} target='_blank'>
                                    <span className='ms-3 lk ' style={{ color: 'rgba(136, 136, 136, 1)', fontSize: '14px' }}>Setup office</span>
                                </Link><br />
                                <Link to='/' className='lk mt-2
                                ' style={{ textDecoration: 'none' }} target='_blank'>
                                    <span className='ms-3 lk' style={{ color: 'rgba(136, 136, 136, 1)', fontSize: '14px' }}>Payroll management</span>
                                </Link><br />
                                <Link to='/' className='lk mt-2
                                ' style={{ textDecoration: 'none' }} target='_blank'>
                                    <span className='ms-3 lk' style={{ color: 'rgba(136, 136, 136, 1)', fontSize: '14px' }}>Third-party arrangement</span>
                                </Link><br />
                                <Link to='/' className='lk mt-2
                                ' style={{ textDecoration: 'none' }} target='_blank'>
                                    <span className='ms-3 lk' style={{ color: 'rgba(136, 136, 136, 1)', fontSize: '14px' }}>Consultancy</span>
                                </Link><br />
                            </div>
                            <div className='footer-link'>
                                <h2 className='text-light mb-3' style={{ fontSize: "20px" }}>Stay up to date</h2>
                                <input type="email" className="form-control text-light" id="emailAddress" placeholder='Your email address' aria-describedby="emailHelp" style={{ backgroundColor: 'rgb(171 171 171 / 27%)', color: 'white', width: '255px', height: '40px', border: '0px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
