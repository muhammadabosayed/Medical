import React from 'react'
import img1 from "../../images/1.jpg"
import img2 from "../../images/2.jpg"
import img3 from "../../images/3.jpg"
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBedPulse , faSyringe , faUserDoctor, faUserNurse } from '@fortawesome/free-solid-svg-icons'
const About = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-6 " >
              <div className="row">
                <div className="col-sm-6" >
                  <div className="image-about m-2">
                  <img src={img1} alt="" />
                  </div>
                </div>
                <div className="col-sm-6" >
                <div className="image-about m-2">
                  <img src={img2} alt="" />
                  </div>
                </div>
                <div className="col-sm-6" >
                <div className="image-about m-2">
                  <img src={img3} alt="" />
                  </div>
                </div>
                <div className="col-sm-6" >
                <div className="image-about m-2 numExp p-3">
                  <span className="number">20</span>
                  <br />
                  <span className="experience">Year Experience</span>
                  </div>
                </div>
              </div>
              <button>Read More</button>
          </div>
          <div className="col-sm-6" >
              <div className="row">
              <div className=" about-us col-sm-12" >
                <h4>About Us</h4>
                <h2 className='h1'>the create place of medical hospital center</h2>
                <p>we provide the special tips and advice's of heath care treatment and high level of best technology involve in the our hospital</p>
                </div>
                <div className="about-us col-sm-6" >
                  <div className='p-3 text-icon'>
                            <FontAwesomeIcon icon={faUserNurse} className='me-3 about-icon ' size="2x"/>
                  <span>Emargency Help</span>
                  </div>
                </div>
                <div className="about-us col-sm-6" >
                <div className='p-3 text-icon'>
                <FontAwesomeIcon icon={faBedPulse} className='me-3 about-icon' size="2x" />

                  <span>Qualified Doctors</span>
                  </div>
                </div>
                <div className="about-us col-sm-6" >
                <div className='p-3 text-icon'>
                <FontAwesomeIcon icon={faUserDoctor} className='me-3 about-icon' size="2x" />

                  <span>Best Profssionals</span>
                  </div>
                </div>
                <div className="about-us col-sm-6" >
                <div className='p-3 text-icon'>
                <FontAwesomeIcon icon={faSyringe} className='me-3 about-icon' size="2x" />

                  <span>Medical Treatment</span>
                  </div>
                </div>

              </div>
              
          </div>
        </div>
      </div>
    
    </>
  )
}

export default About