import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Partner.css'; // Ensure you create this CSS file with styles for the Partners page

const Partner = () => {
  return (
    <div className="partners-container">
      <header className="partners-header">
        <h1>Partners with Us West</h1>
        <p>Join a network of innovative and forward-thinking companies. Partner with Us West for mutual growth and success.</p>
      </header>

      <section className="partners-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="partner-card">
                <img src='images/CLAS.jpg' alt="Partner 1" className="partner-image"/>
                <h3>Container Classification</h3>
                <p>The COntainers are classified into insulated, regular,heavy,freezer,and based on the user requirements 
                Leveraging industry-leading best practices, our experienced technical team collaborates with clients to navigate regulatory changes and prepare for the future.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="partner-card">
                <img src='images/card2.jpg' alt="Partner 2" className="partner-image"/>
                <h3>Global Offshore</h3>
                <p>With a rich history of offshore expertise and innovation spanning more than 70 years, we are the proven leader in offshore classification services. We’re focused on transforming the Class experience by providing expert guidance and assessing new and evolving solutions to help safely manage assets for sustainable offshore operations</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="partner-card">
                <img src='images/card4.jpg' alt="Partner 3" className="partner-image"/>
                <h3>Regulatory Updates</h3>
                <p> including summaries of recent or pending new regulations, particularly those stemming from the work of the IMO.
                Our Regulatory News provides links to the websites of pertinent regulatory agencies to help keep you informed of the internationally recognized standards we assess against. You can refine your search by governing administration.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="partner-card">
                <img src='images/tech.jpg' alt="Partner 4" className="partner-image"/>
                <h3>TECHNOLOGY IN CARGO</h3>
                <p>In a constantly evolving industry, US WEST works alongside its partners tackling the most pressing technical, operational and regulatory challenges so that the marine and offshore industries operate more safely, securely and responsibly</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="partner-card">
                <img src='images/law.jpg' alt="Partner 5" className="partner-image"/>
                <h3>COLLAB WITH INDIAN GOVT</h3>
                <p>government agencies with comprehensive guidance in the marine and offshore sectors. Our solutions cover recognized standards, maritime advisory, new technology development, certification and more. US WEST is the leading government classification society supporting the design, construction and sustainment of government vessels for over 100 years. 
                </p>
                </div>
                </div>
            <div className="col-md-4">
              <div className="partner-card">
                <img src='images/CERTI.jpg'alt="Partner 6" className="partner-image"/>
                <h3>Certification and Approval</h3>
                <p>Whatever your approval and certification needs are, our simplified process gets you what you need quickly and efficiently. Our global team includes accomplished surveyors and engineers whose expertise can assist with your approval and certification needs. Join more than 6,000 other companies in our global ABS-approved databases. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <div className="container text-center">
          <h2>Ready to Partner with Us?</h2>
          <p>Contact us today to explore partnership opportunities and take your business to new heights!</p>
          <a href="mailto:partnerships@uswestcargo.com" className="btn btn-primary">Contact Us</a>
        </div>
      </section>

      <footer className="partners-footer">
        <p>&copy; 2024 Us West Cargo Logistics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Partner;
