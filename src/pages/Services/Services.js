import React from 'react'
import Header from '../../components/Header/Header'
import MainHead from '../../components/MainHead/MainHead'
import CardIcons from '../../components/CardIcons/CardIcons'
import Process from '../../components/Process/Process'
import OurNews from '../../components/OurNews/OurNews'
import OurDoctors from '../../components/OurDoctors/OurDoctors'
import Footer from '../../components/Footer/Footer'

const Services = () => {
  return (
    <>
      <Header />
      <MainHead head="Services" title="Services" />
      <CardIcons />
      <CardIcons />
      <Process />
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
      <OurNews />
      <Footer />
    </>
  )
}

export default Services