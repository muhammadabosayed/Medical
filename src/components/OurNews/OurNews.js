import React from 'react'
import "./OurNews.css"
import doc2 from "../../images/3.jpg"
import doc3 from "../../images/4.jpg"
import doc4 from "../../images/5.jpg"
const OurNews = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="cardDoctor p-2 mb-4">
              <div className="imageDoctor">
                <img src={doc2} alt="doctor" className='w-100 mb-3' />

              </div>
              <div className='innerImageCircle d-flex'>
                <img src={doc2} alt="doctor" className='me-3' />
                <span>Dentist</span>
              </div>
              <h2 className='h4 mt-2 mb-3'>Dental Care for Women is very important </h2>
              <button className='w-75'>Read More</button>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="cardDoctor  p-2 mb-4">
              <div className="imageDoctor">
                <img src={doc3} alt="doctor" className='w-100 mb-3' />

              </div>
              <div className='innerImageCircle d-flex'>
                <img src={doc3} alt="doctor" className='me-3' />
                <span>Dentist</span>
              </div>
              <h2 className='h4 mt-2 mb-3'>Dental Care for Women is very important </h2>
              <button className='w-75'>Read More</button>

            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="cardDoctor  p-2 mb-4">
              <div className="imageDoctor">
                <img src={doc4} alt="doctor" className='w-100 mb-3' />

              </div>
              <div className='innerImageCircle d-flex'>
                <img src={doc4} alt="doctor" className='me-3' />
                <span>Dentist</span>
              </div>
              <h2 className='h4 mt-2 mb-3'>Dental Care for Women is very important </h2>
              <button className='w-75'>Read More</button>

            </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default OurNews