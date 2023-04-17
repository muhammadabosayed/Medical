import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const Login = () => {
  return (
    <>
      <Header />
      <div className="container">
        <form className='p-4 text-center'>
          <input type="text" />
          <input type="password" />
          <button style={{background:"var(--main-color)"}}>Log in</button>
          <h6 className='mt-3' style={{color:"var(--text-color)",fontWeight:"700"}}>Forget Password</h6>
          <p>Dont have any account ?</p>
          <button>Register</button>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default Login