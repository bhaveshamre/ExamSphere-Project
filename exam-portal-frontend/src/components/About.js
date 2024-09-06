import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageSrc from './images/sandesh.jpg';
import imageExamSphere04 from './images/ExamSphere04.jpeg';
import '../components/css/About.css';
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import Footer from '../components/Footer.js';
import imagesandesh from './images/sandesh.jpg';
import imageBhavesh from './images/Bhavesh.jpg';
import imageKrunal from './images/Krunal.jpg';
import imageDuper from './images/Duper.jpg';
import imageSuper from './images/Super.jpg';
import imageAmit from './images/Amit.jpg';
import imageBlank from './images/Blank.webp';
import imageKhali from './images/Khali.jpg';

export default function About() {
  return (
    <React.Fragment>
       <section className="about-section">
        <div className="container">
          <h1>About Us</h1>
          <p className="lead">
            We are here to revolutionize the way exams are conducted and assessed. Our Online Examination System offers a comprehensive, efficient, and modern approach to online examinations.
          </p>
        </div>
      </section>
      <section className="features-section">
      <div className="container">
        <h2 className="section-title text-white">Our Features</h2>
        <div className="row justify-content-center">
          <div className="col-md-5 feature">
            <h3>User Authentication and Authorization</h3>
            <p>Secure logins with role-based access for authorized users.</p>
          </div>
          <div className="col-md-5 feature">
            <h3>Real-time Exam Taking</h3>
            <p>Students can take exams remotely with measures to prevent cheating.</p>
          </div>
          <div className="col-md-5 feature">
            <h3>User-friendly Interface</h3>
            <p>Intuitive design for an enhanced user experience.</p>
          </div>
          <div className="col-md-5 feature">
            <h3>Result Generation</h3>
            <p>Instant results for objective questions, empowering students with feedback.</p>
          </div>
          {/* Add more features here */}
        </div>
      </div>
    </section>
      

    <div className="container">
      <br/>
      <br/>
  <h1 className="text-center mb-5">Our Team</h1>
  <div className="row">
    {/* First Row of Team Members */}
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm text-center border-0">
        <img
          src={imageSrc}
          className="card-img-top rounded-circle border"
          alt="Sandesh Pawar"
          style={{ width: '200px', height: '200px', margin: '20px auto' }}
        />
        <div className="card-body">
          <h4 className="card-title">Sandesh Pawar</h4>
          <p className="card-text">Frontend Developer</p>
          <p><FaEnvelope /> sandesh@gmail.com</p>
          <p><FaPhone /> +91 7721887151</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/" className="me-2"><FaInstagram /></a>
            <a href="https://www.linkedin.com/feed/"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm text-center border-0">
        <img
          src={imageKrunal}
          className="card-img-top rounded-circle border"
          alt="Krunal Hatwar"
          style={{ width: '200px', height: '200px', margin: '20px auto' }}
        />
        <div className="card-body">
          <h4 className="card-title">Krunal Hatwar</h4>
          <p className="card-text">Backend Developer</p>
          <p><FaEnvelope /> krunal@gmail.com</p>
          <p><FaPhone /> +91 7774997165</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/" className="me-2"><FaInstagram /></a>
            <a href="https://www.linkedin.com/feed/"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm text-center border-0">
        <img
          src={imageBhavesh}
          className="card-img-top rounded-circle border"
          alt="Bhavesh Amre"
          style={{ width: '200px', height: '200px', margin: '20px auto' }}
        />
        <div className="card-body">
          <h4 className="card-title">Bhavesh Amre</h4>
          <p className="card-text">Backend Developer</p>
          <p><FaEnvelope /> bhavesh98@gmail.com</p>
          <p><FaPhone /> +91 7774897165</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/" className="me-2"><FaInstagram /></a>
            <a href="https://www.linkedin.com/feed/"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Second Row with Centered Cards */}
  <div className="row justify-content-center">
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm text-center border-0">
        <img
          src={imageSuper}
          className="card-img-top rounded-circle border"
          alt="Rutvik Tale"
          style={{ width: '200px', height: '200px', margin: '20px auto' }}
        />
        <div className="card-body">
          <h4 className="card-title">Rutvik Tale</h4>
          <p className="card-text">Frontend Developer</p>
          <p><FaEnvelope /> rutvik@gmail.com</p>
          <p><FaPhone /> +91 7744997165</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/" className="me-2"><FaInstagram /></a>
            <a href="https://www.linkedin.com/feed/"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm text-center border-0">
        <img
          src={imageAmit}
          className="card-img-top rounded-circle border"
          alt="Amit Mandakhailkar"
          style={{ width: '200px', height: '200px', margin: '20px auto' }}
        />
        <div className="card-body">
          <h4 className="card-title">Amit Mandakhailkar</h4>
          <p className="card-text">Backend Developer</p>
          <p><FaEnvelope /> amit@gmail.com</p>
          <p><FaPhone /> +91 7724997165</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/" className="me-2"><FaInstagram /></a>
            <a href="https://www.linkedin.com/feed/"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




      <Footer />
    </React.Fragment>
    
  );
}
