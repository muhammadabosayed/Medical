import React from 'react'
import "./CardIcons.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBaby, faBed, faSyringe  } from '@fortawesome/free-solid-svg-icons'
const CardIcons = () => {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="cardIcon  p-2 mb-4 mt-4">
            
            <FontAwesomeIcon icon={faBed} className="iconDoc p-2" size="3x"/>
              <h2 className='h4 mt-2 mb-2'>Qualified Doctors</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at accusamus tempora distinctio. Ea, maiores deleniti! Quidem cumque provident tempore?</p>
              <button className='w-50'>Read More</button>

            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="cardIcon  p-2 mb-4 mt-4">
    
            <FontAwesomeIcon icon={faBaby} className="iconDoc p-2" size="3x"/>
              <h2 className='h4 mt-2 mb-2'>Qualified Doctors</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at accusamus tempora distinctio. Ea, maiores deleniti! Quidem cumque provident tempore?</p>
              <button className='w-50'>Read More</button>

            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="cardIcon  p-2 mb-4 mt-4">
    
            <FontAwesomeIcon icon={faSyringe} className="iconDoc p-2" size="3x"/>
              <h2 className='h4 mt-2 mb-2'>Qualified Doctors</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at accusamus tempora distinctio. Ea, maiores deleniti! Quidem cumque provident tempore?</p>
              <button className='w-50'>Read More</button>

            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default CardIcons