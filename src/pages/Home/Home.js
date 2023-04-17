import React from 'react'
import imageHome from '../../images/24.jpg'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faNotesMedical, faTruckMedical , faWheelchair } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Header from "../../components/Header/Header"
import About from "../../components/About/About"
import Process from "../../components/Process/Process"
import Footer from "../../components/Footer/Footer"
const Home = () => {

  

  
  return (
  <>
  <Header />
  <header className="p-3 pt-5">
    
    <div className="container">
      <div className="row">
    
        <div className=" col-md-6 col-lg-6 my-3 imageHomepage">
        <FontAwesomeIcon icon={faWheelchair} className="wheelchair icon" />
          <h4>We Provide All Health Care Solution</h4>
          <h2>Protect Your Health And Take Care To of Your Health</h2>
          <button>
            <Link to="#">Read More</Link>
          </button>


          <FontAwesomeIcon icon={faNotesMedical} className="notes icon" />
        </div>

        <div className=" col-md-6 col-lg-6 my-3 imageHomepage">
          <img src={imageHome} alt="imageHome" />

          <FontAwesomeIcon icon={faTruckMedical} className="trunk icon"/>


        </div>
      </div>
    </div>
  </header>
  <About />
  <Process />
  <Footer />
  </>
  )
}
export default Home
