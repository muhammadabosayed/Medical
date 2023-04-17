import React from 'react'
import "./Process.css"
const Process = () => {
  return (
    <>
    <div className="container mt-5 mb-3">
      <div className="text-center about-card">
      <h5>working Process</h5>
      <h3 className='h2'>How we works?</h3>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="cards p-3">
          <span>01</span>
          <h6>Make Appointment</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ratione natus mollitia quaerat tempora. Neque tempore ipsum ab quas alias.</p>
          <button className='w-50'>View More</button>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="cards p-3">
        <span>02</span>
          <h6>Make Appointment</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ratione natus mollitia quaerat tempora. Neque tempore ipsum ab quas alias.</p>
          <button className='w-50'>View More</button>
        </div>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="cards p-3">
        <span>03</span>
          <h6>Make Appointment</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ratione natus mollitia quaerat tempora. Neque tempore ipsum ab quas alias.</p>
          <button className='w-50'>View More</button>
        </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Process