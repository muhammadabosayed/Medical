import React from 'react'
import "./OurDoctors.css"
import doc1 from "../../images/13.jpg"
import doc2 from "../../images/20.jpg"
import doc3 from "../../images/27.jpg"
import doc4 from "../../images/5.jpg"
import { FaFacebook ,FaTwitter,FaLinkedin} from 'react-icons/fa';
const OurDoctors = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="cardDoctor text-center p-2 mb-4">
            <div className="imageDoctor">
            <img src={doc1} alt="doctor" className='w-100 mb-3' />

            </div>
              <h2 className='h4'>Dr.Addition Smith</h2>
              <span>Dentist</span>
              <div className="icons mt-3 mb-4">
              <FaFacebook size={28} className="me-2 icon-doctor p-1"/>
            <FaTwitter size={28} className="me-2 icon-doctor p-1"/>
            <FaLinkedin size={28} className="me-2 icon-doctor p-1"/>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="cardDoctor text-center p-2 mb-4">
            <div className="imageDoctor">
            <img src={doc2} alt="doctor" className='w-100 mb-3' />

            </div>
              <h2 className='h4'>Dr.Addition Smith</h2>
              <span>Dentist</span>
              <div className="icons mt-3 mb-4">
              <FaFacebook size={28} className="me-2 icon-doctor p-1"/>
            <FaTwitter size={28} className="me-2 icon-doctor p-1"/>
            <FaLinkedin size={28} className="me-2 icon-doctor p-1"/>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="cardDoctor text-center p-2 mb-4">
            <div className="imageDoctor">
            <img src={doc3} alt="doctor" className='w-100 mb-3' />

            </div>
              <h2 className='h4'>Dr.Addition Smith</h2>
              <span>Dentist</span>
              <div className="icons mt-3 mb-4">
              <FaFacebook size={28} className="me-2 icon-doctor p-1"/>
            <FaTwitter size={28} className="me-2 icon-doctor p-1"/>
            <FaLinkedin size={28} className="me-2 icon-doctor p-1"/>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="cardDoctor text-center p-2 mb-4">
            <div className="imageDoctor">
            <img src={doc4} alt="doctor" className='w-100 mb-3' />

            </div>
              <h2 className='h4'>Dr.Addition Smith</h2>
              <span>Dentist</span>
              <div className="icons mt-3 mb-4">
              <FaFacebook size={28} className="me-2 icon-doctor p-1"/>
            <FaTwitter size={28} className="me-2 icon-doctor p-1"/>
            <FaLinkedin size={28} className="me-2 icon-doctor p-1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default OurDoctors