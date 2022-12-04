import React from 'react'
import NavBar from './Dashboard/components/NavBar';
import Footer from './Dashboard/components/Footer';

const TemplatePage = ({ navbarOptions, children }) => {
  return (
    <div className='template-page'>
      <NavBar navbarOptions={navbarOptions} />
      {children}
      <Footer />
    </div>
  )
};

export default TemplatePage;
