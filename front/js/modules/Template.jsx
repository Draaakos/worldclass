import React from 'react'
import NavBar from './Dashboard/components/NavBar'
import Footer from './Dashboard/components/Footer'

const TemplatePage = ({children}) => {
  return (
    <div className='template-page'>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default TemplatePage