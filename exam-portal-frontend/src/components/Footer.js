import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import '../components/css/Footer.css'; // Import your custom CSS for the footer

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Contact Us</h2>
            <p><FaEnvelope /> ExamSphere@gmail.com</p>
            <p><FaPhone /> +1234567890</p>
          </div>
          
          <div className="col-md-4">
            <h2>Address</h2>
            <p>Kharghar</p>
            <p>Mumbai , India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
