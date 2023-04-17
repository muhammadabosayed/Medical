import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook ,FaTwitter,FaGithub,FaLinkedin,FaPhoneAlt} from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
  return(
    <footer className="p-2 mt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 col-md-3 col-xs-12">
            <h4 className="mb-3">Medical</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at doloribus id dolores fuga ducimus libero veniam magni rerum eaque quidem culpa, eligendi eum? Accusantium ut veritatis culpa soluta quod.</p>
            <div className="contact d-flex">
            <FaPhoneAlt size={42} className="me-3 icon-social"/>
              <div className="contact-num">
                <h6>Contact Us</h6>
                <span>01158242102</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-xs-12">
            <h4 className="mb-3">Quick Links</h4>
            <ul>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Services</Link></li>
              <li><Link to="#">Booking</Link></li>
              <li><Link to="#">Faq's</Link></li>
              <li><Link to="#">Blogs</Link></li>
              <li><Link to="#">Our Team</Link></li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 col-xs-12">
          <h4 className="mb-3">Our Services</h4>
            <ul>
              <li><Link to="#">Dental Care</Link></li>
              <li><Link to="#">Cardiac Clinic</Link></li>
              <li><Link to="#">Massege Therapy</Link></li>
              <li><Link to="#">Cardiology</Link></li>
              <li><Link to="#">Precise Diagnosis</Link></li>
              <li><Link to="#">Abmulance Services</Link></li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 col-xs-12">
            <h4 className="mb-3">Subcribe</h4>
            <input type="email" />
            <button className="mb-4 mt-4">Subcribe Now</button>

            <FaFacebook size={28} className="me-2 icon-social"/>
            <FaTwitter size={28} className="me-2 icon-social"/>
            <FaGithub size={28} className="me-2 icon-social"/>
            <FaLinkedin size={28} className="me-2 icon-social"/>
          </div>
        </div>

        <p className="copyright p-3 text-center mt-2">Copyright &#9400; 2023 Design by <span>Muhammad Sayed</span></p>
      </div>
    </footer>

  )
  
}
export default Footer