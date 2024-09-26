import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css'; 
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';


const ContactUs = () => {
  const handleEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const mailtoLink = `mailto:support@uscargo.com?subject=Contact Form Submission from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    
    // Open mail client
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page-container">
      <div className="container mt-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="text-center mb-5">
          We're here to help! Feel free to reach out to us with any inquiries or feedback.
        </p>

        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleEmail}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Your message..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">Send Message</button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="row mt-5 text-center">
          <div className="col-md-4">
            <h5>Address</h5>
            <p>123 West Cargo St, Los Angeles, CA, USA</p>
          </div>
          <div className="col-md-4">
            <h5>Email</h5>
            <p>support@uscargo.com</p>
          </div>
          <div className="col-md-4">
            <h5>Phone</h5>
            <p>+1 800-555-1234</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="row mt-5 text-center">
          <div className="col-md-12">
            <h5>Follow Us</h5>
            <a href="#" className="mr-3"><i className="fab fa-facebook"></i></a>
            <a href="#" className="mr-3"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
