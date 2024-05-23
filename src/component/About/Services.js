import React, { useRef, useEffect } from 'react';
import './Services.css';
import img1 from '../img1.png';
import img2 from '../img2.png';
import img3 from '../img3.png';
import img4 from '../image.png';
import { Link } from 'react-router-dom';

export const Services = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        const container = scrollContainerRef.current;
        const lastScrollPosition = container.scrollLeft;
        const newScrollPosition = lastScrollPosition - 320;

        if (newScrollPosition <= 0) {
            container.scrollLeft = container.scrollWidth - container.clientWidth;
        } else {
            container.scrollLeft = newScrollPosition;
        }
    };

    const scrollRight = () => {
        const container = scrollContainerRef.current;
        const lastScrollPosition = container.scrollLeft;
        const newScrollPosition = lastScrollPosition + 320;

        if (newScrollPosition >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
        } else {
            container.scrollLeft = newScrollPosition;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            scrollRight();
        }, 2000); // 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="services-container">
            <div className="card mt-5 mb-3 overflow-hidden" style={{ backgroundColor: 'gray', borderRadius: '32px', maxWidth: "72rem" }}>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h1 className="mb-0 text-light" >Services</h1>
                        <div>
                            <button className="btn text-light ms-2" style={{ backgroundColor: 'grey', width: '64px', height: '64px', borderRadius: "16px" }} onClick={scrollLeft}>
                                <i className="bi bi-arrow-left" style={{ fontSize: '25px' }}></i>
                            </button>
                            <button className="btn btn-primary ms-2" onClick={scrollRight} style={{ width: '64px', height: '64px', borderRadius: "16px" }}>
                                <i className="bi bi-arrow-right" style={{ fontSize: '25px' }}></i>
                            </button>
                        </div>
                    </div>
                    <div className="scroll-container" ref={scrollContainerRef} style={{ display: 'flex' }}>
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
        </div>
    )
}

export default Services;
