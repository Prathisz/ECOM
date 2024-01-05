// Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, MailOutline, Phone } from '@mui/icons-material';
import './Footer .css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='fl'>
          <Col md={6}>
            <div className="footer-left">
              <h3>JOTEX</h3>
              <p>The Jotex brand is a hallmark of quality and trust from the textile industry, active in the Indian textile industry since 2022.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="footer-right">
              <div className="footer-links">
                <div className='flex'>
                  <div>
                    <h4>Quick Links</h4>
                    <p>Login</p>
                    <p>Orders</p>
                    <p>My Account</p>
                  </div>
                  <div className="contact-details">
                    <h4>Contact Details</h4>
                    <p>Email: info@company.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                  </div>
                  <div className="sample-address">
                    <h4>Sample Address</h4>
                    <p>1234 Main St, Cityville</p>
                    <p>State, Country - 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="follow-us">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <Facebook fontSize="large" />
              <Twitter fontSize="large" />
              <Instagram fontSize="large" />
              <MailOutline fontSize="large" />
              <Phone fontSize="large" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
