import React from 'react'
import "./Blog.css"
import Header from '../../components/Header/Header'
import MainHead from '../../components/MainHead/MainHead'
import OurNews from '../../components/OurNews/OurNews'
import Footer from '../../components/Footer/Footer'
const Blog = () => {
  return (
    <>
    <Header />
    <MainHead head="Blog Grid 3" title="Blog Grid 3" />

    <div className="container text-center mb-3">
        <h4 className="h4 mt-5" style={{color:"var(--sub-color)",fontWeight: 600}}>Our Doctors</h4>
        <p className="h1" style={{color:"var(--text-color)",fontWeight: 700}}>Meet Best Doctors</p>
      </div>
    <OurNews />
    <OurNews />
    <OurNews />
    <Footer />
    
    </>
  )
}

export default Blog