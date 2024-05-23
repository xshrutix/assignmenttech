import React, { useRef, useEffect } from 'react';
import Ho from './home.png'
import meb from './meb.png'
import user from './user1.png'
import le from './le.png'
import us from './us.png'
import lo from './lo.png'
import fo from './fo.png'
import so from './so.png'


import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './image.png'

import { Link } from 'react-router-dom';
import './Home.css'
function Home() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="d-flex flex-column align-items-center p-3">
      
      <div className="first-box d-flex align-items-center justify-content-center mb-4 mt-4 ">
        <span className="text-center fw-bold fs-1">Empowering <br/>Service-Oriented Organizations</span>
      </div>

     
      <div className="second-box mb-3">
        <img src={Ho} alt="Descriptive Alt Text" className="img-fluid" />
      </div>

   
      <div className=" d-flex flex-column flex-md-row justify-content-between w-100 third-box">

        <div className="left-inner-box d-flex align-items-center justify-content-center mt-3 me-3">
        <div className="card">
          <div className="card-body">
            <p>
              Our team of experts brings years of experience in the industry, coupled with a deep understanding of the challenges faced by service-oriented organizations.<br/><br/>
              We are committed to helping you optimize your operations and achieve your business objectives effectively and efficiently.
            </p>
            <button className="btn btn-primary ml-auto me-5 rounded-pill " style={{fontSize:'16px'}}>LEARN MORE</button>
          </div>
        </div> </div>
        <div className="right-inner-box d-flex align-items-center justify-content-center mt-3 p-3">
        <div className="card">
        <div className="meow card-body d-flex justify-content-between align-items-center">
          {/* First Box */}
          <div className="box me-3">
            <img src={meb} alt="Image 1" className="img-fluid mb-2" style={{ width: '103px', height: '141px' }} />
            <h5>Members</h5>
          </div>
          {/* Second Box */}
          <div className="box">
            <h5>30+</h5>
            <img src={user} alt="Image 2" className="img-fluid mt-2 rounded" style={{ width: '103px', height: '141px' }} />
          </div>
        </div>
      </div>
        </div>
      </div>


      <div className="custom-outer-container mt-5 mb-5">
      <div className="custom-heading">
        <h1>Team Building</h1>
      </div>
      <div className="custom-card-container d-flex flex-wrap justify-content-center">
        <div className="custom-card">
          <div className="custom-card-body text-center">
            <img src={le} alt="Leader" className="custom-img-fluid mb-2" style={{ width: '64px', height: '64px' }} />
            <h3>Leadership<br/>
Hiring</h3>
            <p>Hiring leaders</p>
          </div>
        </div>
        <div className="custom-card">
          <div className="custom-card-body text-center">
            <img src={us} alt="Building Extended Team" className="custom-img-fluid mb-2" style={{ width: '64px', height: '64px' }} />
            <h3>Building Extended <br/>Team</h3>
            <p>Hiring and setting up teams in <br/>different locations</p>
          </div>
        </div>
        <div className="custom-card">
          <div className="custom-card-body text-center">
            <img src={lo} alt="Building Extended Team" className="custom-img-fluid mb-2" style={{ width: '64px', height: '64px' }} />
            <h3>Hiring Candidates <br/> for Clients</h3>
            <p>Hiring and setting up teams in <br/>different locations</p>
          </div>
        </div>
      </div>
    </div>
      <div className="card mt-5 mb-3 overflow-hidden" style={{ backgroundImage: 'linear-gradient(180deg, #000044 0%, #000028 100%)', borderRadius: '32px',maxWidth:"72rem" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="mb-0 text-light" >Services</h1>
            <div>
              <button className="btn text-light ms-2" style={{ backgroundColor: 'grey', width: '64px', height: '64px',borderRadius:"16px" }} onClick={scrollLeft}>
                <i className="bi bi-arrow-left" style={{ fontSize: '25px' }}></i>
              </button>
              <button className="btn btn-primary ms-2" onClick={scrollRight} style={{ width: '64px', height: '64px' ,borderRadius:"16px"}}>
                <i className="bi bi-arrow-right" style={{ fontSize: '25px' }}></i>
              </button>
            </div>
          </div>
          <div className="scroll-container" ref={scrollContainerRef}>
            <Link to="/" className="lk mt-2" target="_blank">
              <img src={img1} alt="Image 1" className="img-fluid mb-2" style={{ width: '320px', height: '570px' }} />
              <img src={img2} alt="Image 2" className="img-fluid mb-2" style={{ width: '320px', height: '570px' }} />
              <img src={img3} alt="Image 3" className="img-fluid mb-2" style={{ width: '320px', height: '570px' }} />
              <img src={img1} alt="Image 4" className="img-fluid mb-2" style={{ width: '320px', height: '570px' }} />
              <img src={img3} alt="Image 5" className="img-fluid mb-2" style={{ width: '320px', height: '570px' }} />
              <img src={img2} alt="Image 6" className="img-fluid mb-2" style={{ width: '320px', height: '570px' }} />
            </Link>
          </div>
        </div>
      </div>


  
    <div className="custom-outer-container mt-4 mb-4">
      <div className="custom-heading">
        <h1>Branding</h1>
      </div>
      <div className="custom-card-container d-flex flex-wrap justify-content-center">
        <div className="custom-card">
          <div className="custom-card-body text-center">
            <img src={so} alt="Leader" className="custom-img-fluid mb-2" style={{ width: '64px', height: '64px' }} />
            <h3>Ads</h3>
            <p>Elevate your brand with our expert branding <br/>services</p>
          </div>
        </div>
        <div className="custom-card">
          <div className="custom-card-body text-center">
            <img src={lo} alt="Building Extended Team" className="custom-img-fluid mb-2" style={{ width: '64px', height: '64px' }} />
            <h3>Increasing footprints</h3>
            <p>Let us help you leave a lasting impression and<br />increase your brand's footprint in the market.</p>
          </div>
        </div>

      </div>
    </div>
    <div class="container mt-5 mb-5">
  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-6 col-sm-12">
      <div class="imagebox">
        <img src={img4} alt="Image 5" className="img-fluid mb-2" style={{maxWidth:' 100%', height: 'auto'}} />
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12">
      <div class="abobox mt-4">
        <h2 style={{fontSize: '3rem'}}>Get Started Today</h2>
        <p style={{fontSize: '1.25rem', color: 'rgba(77, 77, 77, 1)'}}>Sign up now for a consultation and see how we can help<br/> transform your business.</p>
        <form class="row g-3 mt-4">
          <div class="col-md-6">
            <label for="formGroupExampleInput" class="form-label fw-bold">Name</label>
            <input type="text" class="form-control" placeholder="Enter name" aria-label="First name"/>
          </div>
          <div class="col-md-6">
            <label for="formGroupExampleInput" class="form-label fw-bold">Email</label>
            <input type="email" class="form-control" placeholder="Enter email address" aria-label="Last name"/>
          </div>
          <div class="col-md-12">
            <label for="formGroupExampleInput" class="form-label mt-3 fw-bold">Message</label>
            <div class="form-floating mb-3">
              <textarea class="form-control" placeholder="Enter your message" id="floatingTextarea2" style={{height: '100px'}}></textarea>
              <label for="floatingTextarea2">Enter your message</label>
            </div>
          </div>
          <div class="col-md-12">
            <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


</div>
  );
}

export default Home;
