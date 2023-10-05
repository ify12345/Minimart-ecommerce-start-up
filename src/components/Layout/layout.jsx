import React from 'react'
import Header from '../Header/Header'
import Footer from '../Header/Footer'
import Router from '../../routers/Router'

const layout = () => {
  return (
    <>

      <Header/>
      <div>
        <Router/>
      </div>
        <Footer/>
    </>
  )
}

export default layout
