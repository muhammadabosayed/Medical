import React from 'react'
import "./MainHead.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const MainHead = ({head,title}) => {
  return (
    <>
      <div className="text-center p-3 notfound"> 
        <h2 className="h1">{head}</h2>
        <div className="home p-2">
        <FontAwesomeIcon icon={faHome} className="me-2"/>
          <Link to = "/" style={{color:"#fff"}}>Home</Link> / {title}
        </div>
      </div>
    </>
  )
}

export default MainHead