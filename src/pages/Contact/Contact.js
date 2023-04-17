import React from 'react'
import "./Contact.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MainHead from '../../components/MainHead/MainHead'
const Contact = () => {
  return (
    <>
    <Header />
    <MainHead head="Contact Us" title="Contact Us"/>
    <div className="container">
      <div className="row contacus">
      <div className="col-xs-12 col-sm-6 ">
              <form className='p-4'>
                <input type="text" placeholder='Enter your Name'/>
                <input type="text" placeholder='Enter your Phone'/>
                <input type="email" placeholder='Enter Your Email'/>
                <textarea placeholder='Type Message' style={{width:"100%",height:"150px",borderRadius:"8px"}}></textarea>
                <button>Submit</button>
              </form>
          </div>
          <div className="col-xs-12 col-sm-6 contactimage">

            <div className="contentContact mt-4">
    
            </div>
            

            </div>
      </div>

    </div>
    <Footer />
    </>
  )
}

export default Contact