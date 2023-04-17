import React from 'react'
import "./NotFound.css"
import MainHead from '../../components/MainHead/MainHead'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const NotFound = () => {
  return (
    <>
    <Header />
      <MainHead head="Page 404 Not Found "  title="Page Not Found" />
      <div className="notfoundbody">
          <div className="page404 text-center">
            4<span>&#128579;</span>4
          </div>
          <h5 className="text-center">the page you were looking for couldn't be found</h5>
      </div>
      <Footer />
    </>
  )
}

export default NotFound