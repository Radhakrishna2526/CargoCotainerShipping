import React from 'react';
import Carousel from 'react-multi-carousel'; // Assuming you'll use a library for the carousel
import 'react-multi-carousel/lib/styles.css'; // Import carousel styles
import './aland.css';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const CustomLeftArrow = ({ onClick }) => (
    <button className="custom-left-arrow" onClick={onClick}>
        &#8249; {/* Left arrow character */}
    </button>
);

const CustomRightArrow = ({ onClick }) => (
    <button className="custom-right-arrow" onClick={onClick}>
        &#8250; {/* Right arrow character */}
    </button>
);

const LandingPage = () => {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };
    const containers = [
        { 
            name: 'Container 1', 
            height: '12ft', 
            weight: '2 tons', 
            image: '/images/v.jpg',
            size: 'Small',
            description: 'Ideal for moving small loads or storage needs.'
        },
        { 
            name: 'Container 2', 
            height: '12.5ft', 
            weight: '3 tons', 
            image: '/images/u.jpg',
            size: 'Medium',
            description: 'Perfect for medium-sized goods and cargo.'
        },
        { 
            name: 'Container 3', 
            height: '20ft', 
            weight: '4 tons', 
            image: '/images/zz.jpg',
            size: 'Large',
            description: 'Great for larger shipments and bulk items.'
        },
        { 
            name: 'Container 4', 
            height: '20.5ft', 
            weight: '3.5 tons', 
            image: '/images/w.jpg',
            size: 'Large',
            description: 'Suitable for heavy loads and extensive storage.'
        },
        { 
            name: 'Container 5', 
            height: '30.5ft', 
            weight: '3.5 tons', 
            image: '/images/x.jpg',
            size: 'Large',
            description: 'Suitable for heavy loads and extensive storage.'
        },
        { 
            name: 'Container 6', 
            height: '80.5ft', 
            weight: '3.5 tons', 
            image: '/images/z.jpg',
            size: 'Large',
            description: 'Suitable for heavy loads and extensive storage.'
        }
    ];

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero">
                <video autoPlay loop muted className="video-background">
                    <source src="/images/abc.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay"></div>
                <div className="hero-text">
                    {/* <p className='all'>All-in-one Container Shipping Solution</p> */}
                    <h1>Book Or Rent a Container...</h1>
                    <p className='all'>Our goal is to make booking a shipping container online . while also making it easy for container owners to sell their containers when they are no longer needed.</p>
                  <Link to='/book-cargo'>
                  <button className='est'>Book Your Container</button></Link>
                </div>
          </section>
            <div className='cs'>
                <h1 > Containers Section </h1>
            </div>
            {/* Container Section */}
            <section className="container-section">
             
                <div className="container-list">
                    {containers.map((container, index) => (
                        <div key={index} className="container-item">
                            <img src={container.image} alt={container.name} className="container-image" />
                            <h3 className="size-heading">{container.height} </h3> {/* Bold size heading */}
                            <p className='d'>Height: {container.height}</p>
                            <p className='d'>Weight: {container.weight}</p>
                            <p>Description: {container.description}</p>
                        </div>
                    ))}
                </div>
            </section>

              {/* Carousel Section */}
               {/* Carousel Section */}
             
       {/* Carousel Section */}
       <section className="carousel-section">
                <h2>CONTAINER SHIPPING </h2>
                <Carousel
                    additionalTransfrom={0}
                    autoPlay
                    autoPlaySpeed={3000}
                    infinite
                    keyBoardControl
                    swipeable
                    draggable
                    centerMode={false}
                    itemClass="carousel-item"
                    responsive={{
                        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
                        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
                        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
                    }}
                    showDots={true}
                    slidesToSlide={1}
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                >
                    {containers.map((container, index) => (
                        <div key={index} className="carousel-item">
                            <img src={container.image} alt={container.name} className="carousel-image" />
                            <h3 className="carousel-title">{container.name}</h3>
                            <p>{container.description}</p>
                        </div>
                    ))}
                </Carousel>
            </section>




            {/* Footer Section */}
            <footer className="footer">
    <div className="footer-content">
        <div className="footer-top">
            {/* Column 1: Company Information */}
            <div className="footer-column">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Press</a></li>
                </ul>
            </div>

            {/* Column 2: Help & Support */}
            <div className="footer-column">
                <h4>Help & Support</h4>
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Live Chat</a></li>
                    <li><a href="#">Shipping Information</a></li>
                </ul>
            </div>

            {/* Column 3: Legal & Contact Info */}
            <div className="footer-column">
                <h4>Legal</h4>
                <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>

                <h4>Contact</h4>
                <p>Phone: <a href="tel:+1234567890">+123-456-7890</a></p>
                <p>Email: <a href="mailto:support@containers.com">support@containers.com</a></p>
            </div>
        </div>

        {/* Marquee Section */}
        <div className="footer-marquee">
            <marquee behavior="scroll" direction="left">Welcome to Container Management System. Enjoy our best container solutions at affordable prices!</marquee>
        </div>

        {/* Bottom section for copyright and social media */}
        <div className="footer-bottom">
            <p>&copy; 2024 Container Management System. All rights reserved.</p>
            <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>
        </div>
    </div>
</footer>
        </div>
    );
};

export default LandingPage;
