import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Router from '../routers/Router'



const Layout = () => {
  return (
    <>
        <Header />
        <div>
            <Router />
        </div>
        <Footer />
    </>
    
  )
}

export default Layout