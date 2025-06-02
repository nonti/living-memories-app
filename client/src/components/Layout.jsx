import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
        <div className='bg-[url("../assets/background.jpg")]'>
          {children}
        </div>
        <Footer/>
    </>
    
  )
}

export default Layout