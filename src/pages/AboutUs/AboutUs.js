import React from 'react'
import "./AboutUs.css"
import Header from '../../components/Header/Header'
import MainHead from '../../components/MainHead/MainHead'
import About from '../../components/About/About'
import OurDoctors from "../../components/OurDoctors/OurDoctors"
import Footer from '../../components/Footer/Footer'
import OurNews from '../../components/OurNews/OurNews'
const AboutUs = () => {
  return (
    <>
      <Header />
      <MainHead head="About Us" title="About Us" />
      <About />
      <div className="container">
        <div className="row mt-5 mb-3">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="cards p-3 mt-2 mb-2">
                <span>120</span>
                <h6>Years With You</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ratione natus mollitia quaerat tempora. Neque tempore ipsum ab quas alias.</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="cards p-3 mt-2 mb-2">
                <span>400</span>
                <h6>Awards</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ratione natus mollitia quaerat tempora. Neque tempore ipsum ab quas alias.</p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="cards p-3 mt-2 mb-2">
                <span>250</span>
                <h6>Doctors</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ratione natus mollitia quaerat tempora. Neque tempore ipsum ab quas alias.</p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="cards p-3 mt-2 mb-2">
                <span>800</span>
                <h6>Satisfied Client</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ratione natus mollitia quaerat tempora. Neque tempore ipsum ab quas alias.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mb-3">
        <h4 className="h4 mt-5" style={{color:"var(--sub-color)",fontWeight: 600}}>Our Doctors</h4>
        <p className="h1" style={{color:"var(--text-color)",fontWeight: 700}}>Meet Best Doctors</p>
      </div>
      <OurDoctors />
      <div className="container text-center mb-3">
        <h4 className="h4 mt-5" style={{color:"var(--sub-color)",fontWeight: 600}}>Latest News</h4>
        <p className="h1" style={{color:"var(--text-color)",fontWeight: 700}}>Our Latest News</p>
      </div>
      <OurNews />
      <Footer />
    </>
  )
}

export default AboutUs