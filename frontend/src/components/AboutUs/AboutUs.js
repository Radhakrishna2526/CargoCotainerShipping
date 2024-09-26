import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'; // Ensure this CSS file is linked

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="container">
          <h1 className="text-center">About U.S WEST CARGO Logistics</h1>
          <p className="text-center">
            At U.S WEST CARGO Logistics, we pride ourselves on delivering exceptional cargo and logistics services, ensuring that your shipments reach their destination on time and in perfect condition.
          </p>
          
          {/* Mission Section */}
          <section className="mission-section">
            <h2 className="text-center">Our Mission</h2>
            <p className="text-center">
              To provide innovative, efficient, and reliable logistics solutions that simplify the global supply chain process and help businesses thrive in an ever-connected world.
            </p>
          </section>

          {/* Vision Section */}
          <section className="vision-section">
            <h2 className="text-center">Our Vision</h2>
            <p className="text-center">
              To be a global leader in logistics services, known for our commitment to safety, sustainability, and excellence in customer satisfaction.
            </p>
          </section>

          {/* Values Section */}
          <section className="values-section">
            <h2 className="text-center">Our Core Values</h2>
            <ul className="list-unstyled text-center">
              <li>Integrity and Transparency</li>
              <li>Customer-Centric Approach</li>
              <li>Innovation and Excellence</li>
              <li>Environmental Sustainability</li>
            </ul>
          </section>

          {/* Services Section */}
          <section className="services-section">
            <h2 className="text-center">Our Services</h2>
            <p className="text-center">
              We offer a range of services to meet your cargo needs, including:
            </p>
            <ul className="list-unstyled text-center">
              <li>International Freight Forwarding (Air, Sea, Land)</li>
              <li>Warehousing and Distribution</li>
              <li>Customs Brokerage and Compliance</li>
              <li>Real-Time Cargo Tracking</li>
              <li>Supply Chain Solutions</li>
            </ul>
          </section>

          {/* Team Section */}
          <section className="team-section">
            <h2 className="text-center">Meet Our Team</h2>
            <p className="text-center">
              Our team of experienced professionals is dedicated to providing top-notch customer service and innovative logistics solutions.
            </p>
            <div className="row">
              <div className="col-md-4">
                <div className="team-member">
                  
                  <h5 className="text-center">John Doe</h5>
                  <p className="text-center">CEO</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member">
                 
                  <h5 className="text-center">Jane Smith</h5>
                  <p className="text-center">COO</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member">
                  
                  <h5 className="text-center">Michael Lee</h5>
                  <p className="text-center">CFO</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
