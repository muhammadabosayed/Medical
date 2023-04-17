import React from 'react'
import "./Booking.css"
import Header from '../../components/Header/Header'
import MainHead from '../../components/MainHead/MainHead'
import Footer from '../../components/Footer/Footer'
const Booking = () => {
  return (
    <>
      <Header />
      <MainHead head="Booking" title="Booking" />
      <h3 className='h1 text-center mt-4 mb-2' style={{color:"var(--text-color)",fontWeight: 700}}>Book Appointment</h3>
      <form className='p-3'>
        <input type="text" placeholder='Enter Your Name '/>
        <input type="text" placeholder='Enter Your Age '/>
        <input type="text" placeholder='Enter Your Doctor  '/>
        <input type="number" placeholder='Enter Your Number '/>
        <input type="date" />
        <button className='w-100'>Appointment Now</button>
      </form>
      <Footer />
    </>
  )
}

export default Booking